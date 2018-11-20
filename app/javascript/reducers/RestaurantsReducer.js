
const state_defaults = {
    rating_filter: 'all',
    cuisine_filter: 'all',
    ten_bis_filter: 'all',
    search_text: '',
    restaurants: [],
    filtered_restaurants: [],
    cuisines: []
}

export const restaurantsListReducer = (state=state_defaults, action) => {
    switch (action.type) {
        case "GET_REST_LIST_RESPONSE": {
            state = { ...state,
                restaurants: action.payload.restaurants,
                filtered_restaurants: action.payload.filtered_restaurants,
                cuisines: action.payload.cuisines
            };
            break;
        }
        case "FILTER_REST_LIST": {
            state = { ...state,
                filtered_restaurants: action.payload.filtered_restaurants,
            };
            break;
        }

    }
    return state;
}

