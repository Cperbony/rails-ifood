import restaurants from "../reducers/restaurants";

export const loadRestaurants = () => ({
    type: 'LOAD_RESTAURANTS',
    restaurants: restaurants
});