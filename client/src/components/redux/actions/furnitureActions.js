export function getFurnitures(data) {
    return {
        type: 'GET_FURNITURES',
        payload: data
    }
}

export function getfiles(uploads) {
    return {
        type: 'GET_FILES',
        payload: uploads
    }
}