import { Book } from "../types"
import {useEffect} from 'react';

export default ({currBook, styles, refRBSheet, onOpen}: {currBook: Book | undefined; styles: any; refRBSheet: any; onOpen: any}) => {
    useEffect(() => {
        if(currBook?.link)
            window.open(currBook.link, '_blank')
    }, [currBook]);
    return (<></>)
}