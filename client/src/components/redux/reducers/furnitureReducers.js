const initialUserState = {
    furnitures: [],
    filterProducts:[],
    editItems: {},
    editUsers:{},
    users:[],
    Update:false,
    user:null,
    userName: '',
    expensesClicked: false,
    


}

export function furnitureReducers(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_FURNITURES':
            return {
                ...state,
                furnitures: action.payload,
                 filteredItems:action.payload
            }
            case 'GET_FURNITURE':
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
            case "EXPENSES_CLICKED": {
                return { ...state, expensesClicked: action.expensesClicked }
            }
            case 'GET_USER':
            return {
                ...state,
                users: action.payload,
               
            }
            case 'EDIT_USERS':
                console.log(action.payload)
                return {
                    ...state,
                    user: action.payload
    
    
                }

 case "SAVE_USER_NAME": {
            return { ...state, userName: action.userName }
        }
         
          
                case 'UPDATE':
                    return {
                        ...state,
                        Update: action.state
                    }
                default:
                    return { ...state }
        }}
        