const Users = (state = [], action) => {
    switch(action.type) {
        case 'USERS_LOADED': 
            return [...action.payload]
        default:
            return state
    }
}

export default Users