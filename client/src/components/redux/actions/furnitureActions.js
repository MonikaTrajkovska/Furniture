export function getFurnitures(data) {
    return {
        type: 'GET_FURNITURES',
        payload: data
    }
}
export const deleteItem = (_id) => {
    return {
        type: "DELETE_ITEM",
        payload: _id
    }
}

export function editOneItem(_id) {
    return {
        type: 'EDIT_ITEMS',
        payload:
         _id

    }
}



export function Update(furniture) {
    return {
        type: 'EDIT_ITEMS',
        payload:
            furniture

    }

}
// a=availableSize.indexOf(name.toUpperCase())>=0