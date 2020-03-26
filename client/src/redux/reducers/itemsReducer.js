const initialUserState = {
    items: [],
    newProduct: false,
    Update: false,
    editItems: {},
    item: null

}

export function itemsReducer(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.payload
            }

    
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case 'EDIT_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                item: action.payload


            }
       
        case 'UPDATE':
            return {
                ...state,
                Update: action.state
            }
        case 'NEW_ITEM':
            return {
                ...state,
                newProduct: action.state
            }
        default:
            return { ...state }
    }

}

