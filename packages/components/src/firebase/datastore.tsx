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
		if (state.items[payload.capitol]) {
			state.items[payload.capitol] = [
				...state.items[payload.capitol],
				...payload.items,
			];
		} else {
			state.items[payload.capitol] = payload.items;
		}
	}),
	setItems: action((state, payload) => {
		state.items[payload.capitol] = [...payload.items];
	}),
	setCode: action((state, payload) => {
		state.userCode = payload;
	}),
	setDownloading: action((state, payload) => {
		if (!state.bookStates[payload.path]) {
			state.bookStates[payload.path] = {downloading: false, exists: false};
		}
		state.bookStates[payload.path].downloading = payload.downloading;
	}),
	setExists: action((state, payload) => {
		if (!state.bookStates[payload.path]) {
			state.bookStates[payload.path] = {downloading: false, exists: false};
		}
		state.bookStates[payload.path].exists = payload.exists;
	}),
});

export default store;
