import {createAction, handleActions} from 'redux-actions';
import {Map, List} from 'immutable';

//Action Type
const INPUT = 'message/INPUT';

export const input = createAction(INPUT);

const initialState = Map({
	messages: List([])
});

export default handleActions({
	[INPUT]: (state, action) => {
		const messages = state.get(messages);
		return state.set('messages', messages.push(
			Map({
				content: action.payload.content,
				time: action.payload.time,
				name: action.payload.name
			})
		));
	}
});