const Posts = (state = [], action) => {
    switch(action.type) {
        case 'POSTS_LOADED': 
            return [...action.payload]
        default:
            return state
    }
}

export default Posts