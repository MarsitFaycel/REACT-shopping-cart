const { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_SIZE, FETCH_PRODUCTS_BY_PRICE } = require("../type");

export const productReducers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filtredItems: action.payload.items
            }
        case FETCH_PRODUCTS_BY_PRICE:
            return{
                ...state ,
                sort: action.payload.sort,
                filtredItems: action.payload.items
            }
        case FETCH_PRODUCTS:
            return { items: action.payload , filtredItems:action.payload }
        default:
            return state
    }
}