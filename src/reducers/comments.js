const Comments = (state = [], action) => {
    switch(action.type) {
        case 'COMMENTS_LOADED': 
            return [...action.payload]
        default:
            return state
    }
}

export default Comments