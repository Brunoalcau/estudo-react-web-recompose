import {cloneDeep, map, forEach} from 'lodash';
const initial = {
	byIndex: {},
	allIndex: []
}

const getLink = (state, {payload}) => {	
	const newState = cloneDeep(state);
	const {links} = payload;
	forEach(links, (item, index) => newState.byIndex[index] = item);
	newState.allIndex  = map(links, (item, index) => index);
	return newState;
};

export const link = (state = initial, action) => {
	switch(action.type) {
		case 'GET_SUCCESS_LINK': 
			return getLink(state, action);
		default:
			return initial;
	}
}