import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getFoods = createAsyncThunk(
	"HOUSEHOLD/GET_FOODS",
	() => {
		console.log('res')
		console.log(window.appConfig.foodServiceManager)
		return axios.get(
			window.appConfig.foodServiceManager + '/food-service-manager/food',
		)
	}
)