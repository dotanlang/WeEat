import { restaurantsListReducer } from "../reducers/RestaurantsReducer"
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
    restaurantsList: restaurantsListReducer
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    console.log("store changed", store.getState())
})
