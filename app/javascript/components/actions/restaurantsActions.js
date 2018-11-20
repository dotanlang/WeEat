export function restListResponse(restaurants, filteredRestaurants, cuisines) {
    return {
        type: "GET_REST_LIST_RESPONSE",
        payload: {
            restaurants: restaurants,
            filtered_restaurants: filteredRestaurants,
            cuisines: cuisines}
    };
}

export function restChangeFilter(filter_name, value) {
    return {
        type: "REST_CHANGE_FILTER",
        payload: {
            filter_name: filter_name,
            value: value
        }
    };
}