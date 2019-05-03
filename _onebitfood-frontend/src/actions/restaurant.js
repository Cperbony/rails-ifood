import { LOAD_RESTAURANTS } from "./action_types";
import api from "../services/api";

export const loadRestaurants = () => async (dispatch) => {
    let response = await api.loadRestaurants();
    dispatch({
        type: LOAD_RESTAURANTS,
        restaurants: response.data.restaurants
    });
}