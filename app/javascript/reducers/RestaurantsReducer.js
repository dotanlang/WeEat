
const initialState = {
    rating_filter: 'all',
    cuisine_filter: 'all',
    ten_bis_filter: 'all',
    search_text: '',
    restaurants: [],
    cuisines: []
}

export const restaurantsListReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_REST_LIST_RESPONSE": {
            state = { ...state,
                restaurants: action.payload.restaurants,
                filtered_restaurants: action.payload.filtered_restaurants,
                cuisines: action.payload.cuisines
            };
            break;
        }

        case "REST_CHANGE_FILTER": {
            state = { ...state,
                [action.payload.filter_name]: action.payload.value
            };
            break;
        }

    }
    return state;
}

