import {action, createContextStore} from 'easy-peasy';

import {StoreModel} from '../types';

const store = createContextStore<StoreModel>({
	subjects: [],
	capitols: {},
	items: {},
	userCode: '',

	bookStates: {},

	addSubjects: action((state, payload) => {
		state.subjects = payload;
	}),

	addCapitols: action((state, payload) => {
		state.capitols[payload.subject] = payload.capitols;
	}),

	addItems: action((state, payload) => {
		if (!payload.items) {
			return;
		}
		let items = state.items[payload.capitol];
		if(!items) {
			items = [];
		}

		for(let i = 0; i < payload.items.length; i++) {
			if(!items.find(x => x.nev == payload.items[i].nev)) {
				items.push(payload.items[i]);
			}
		}

		state.items[payload.capitol] = [...items];
	}),
	setCode: action((state, payload) => {
		state.userCode = payload;
	}),
	setBookState: action((state, payload) => {
		state.bookStates[payload.path] = payload.state;
	}),
});

export default store;
