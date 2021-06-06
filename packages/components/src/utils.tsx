import React from 'react';

import {Bac, Book, Extra, Item, Test} from "./types";


const typeToString: {[id: string]: string} = {
    'book': 'Könyv',
    'test': 'Teszt',
    'bac': 'Érettségi',
    'extra': 'Extra'
};

const stringToType: {[id: string]: string} = {
    'Könyv': 'book',
    'Teszt': 'test',
    'Érettségi': 'bac',
    'Extra': 'extra'
}

const GetDbPath = (itemType: string, db: string): string => {
    let dbString = '';
    switch(itemType) {
        case 'Könyv': {
            dbString = `/Books/${db}/`;
            break;
        }
        case 'Teszt': {
            dbString = `/Tesztek/${db}/`;
            break;
        }
        case 'Érettségi': {
            dbString = `/Bac/${db}/`;
            break;
        }
        case 'Extra': {
            dbString = `/Extrak/${db}/`;
            break;
        }
    }
    return dbString;
}

const createItemFromData = (data: any): Item => {
    let newItem: Item;
    switch(data.ref.type) {
        case 'Könyv': {
            newItem = {
                nev: data['Név'],
                link: data['Link'],
                meret: data['Méret'],
                elso: parseInt(data['Első']),
                masodik: parseInt(data['Második']),
                type: 'book'
            } as Book;
            break;
        }
        case 'Teszt': {
            newItem = {
                nev: data['Név'],
                link: data['Link'],
                type: 'test',
            } as Test;
            break;
        }
        case 'Érettségi': {
            newItem = {
                nev: data['Név'],
                link: data['Link'],
                type: 'bac',
            } as Bac;
            break;
        }
        case 'Extra': {
            newItem = {
                nev: data['Név'],
                link: data['Link'],
                type: 'extra',
            } as Extra;
            break;
        }
        default: {
            newItem = {
                nev: data['Név'],
                link: data['Link']
            } as Extra;
            break;
        }
    }
    newItem['hidden'] = data['Rejtve'];
    return newItem;
}

const createDataFromItem = (item: Item, selected: string, items: Item[]): object => {
    const data: any = {'Név': item.nev, 'Link': item.link, 'Rejtve': item.hidden ?? false};
    data['ref'] = {
        index: item.index,
        db: selected,
        type: typeToString[item.type ?? 'extra'],
        realIndex: items.indexOf(item),
    };
    if(item.type === 'book') {
        data['Méret'] = (item as Book).meret.toString();
        data['Első'] = (item as Book).elso.toString();
        data['Második'] = (item as Book).masodik.toString();
    }
    return data;
}
export {createDataFromItem, createItemFromData, typeToString, stringToType, GetDbPath};