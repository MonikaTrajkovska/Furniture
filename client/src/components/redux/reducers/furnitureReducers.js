const initialUserState = {
    furnitures: [],
    filterProducts:[],
    name:'',
    // furniture:null,
    editItems: {},
    


}

export function furnitureReducers(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_FURNITURES':
            return {
                ...state,
                furnitures: action.payload,
                 filteredItems:action.payload
            }
            case 'EDIT_ITEMS':
            console.log(action.payload)
            return {
                ...state,
                furnitures: state.furnitures.filter(furniture => furniture._id !== action.payload)


            }
       
           
                case 'UPDATE':
                    return {
                        ...state,
                        Update: action.state
                    }
                default:
                    return { ...state }
        }}