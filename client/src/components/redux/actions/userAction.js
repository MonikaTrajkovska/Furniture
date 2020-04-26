
export const saveUserName = (name) => {
    return {
        type: "SAVE_USER_NAME",
        userName: name
    }
}
export const expensesClicked = (expensesClicked) => {
    return {
        type: "EXPENSES_CLICKED",
        expensesClicked
    }
}
 export function editUserInfo(users) {
     console.log(users)
   return {
         type: "EDIT_USER_INFO",
         payload: users
     }
 }
export function getUser(users) {
    return {
        type: 'GET_USER',
        payload: users
    }
}
export function Update(user) {
    return {
        type: 'UPDATE',
        state: user
    }
}



export function editOneUser(user) {
    return {
        type: 'EDIT_USERS',
        payload:
            user

    }
}
export function newUser(user) {
    return {
        type: 'NEW_USER',
        state: user
    }
}