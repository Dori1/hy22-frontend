import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import HouseHoldReducer from '../household/HouseHold.reducer';

export const store = configureStore({
	reducer: {
		houseHoldReducer: HouseHoldReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
			},
			serializableCheck: false,
		}),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
