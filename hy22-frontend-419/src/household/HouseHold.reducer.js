import { createReducer } from '@reduxjs/toolkit'
import {
	getFoods
} from './HouseHold.action';

const initialState = {
	foods: []
}
// const resetAction = createAction('reset-tracked-loading-state')
//
// function isPendingAction(action) {
// 	return action.type.endsWith('/pending')
// }

const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(
			getFoods.fulfilled,
			(state, action) => {
				state.foods = action.payload.data;
			})
		.addDefaultCase((state) => state)
});

export default reducer;