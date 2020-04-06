const initialUserState = {
    furnitures: [],


}

export function furnitureReducers(state = initialUserState, action) {
    switch (action.type) {
        case 'GET_FURNITURES':
            return {
                ...state,
                furnitures: action.payload
            }
            case 'GET_FILES':
                return {
                    ...state,
                    uploads: action.payload
                }
        
                default:
                    return { ...state }
        }}