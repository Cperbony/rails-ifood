import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import ModalReducer from "./modalReducer";
import AddressReducer from "./addressReducer";
import NewOrderReducer from './newOrderReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    restaurantsState: RestaurantsReducer,
    orderState: orderReducer,
    modalState: ModalReducer,
    addressState: AddressReducer,
    newOrderState: NewOrderReducer
})