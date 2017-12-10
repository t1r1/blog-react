import axios from 'axios';
import store from '../store'

const root = 'https://jsonplaceholder.typicode.com';


export function getAllPosts () {
    axios.get(root + '/posts')
        .then(function(response) {
            store.dispatch({type: 'POSTS_LOADED', payload: response.data})
        })
        .catch (function(err) {
            console.log(err)
        })
}

export function getAllComments () {
    axios.get(root + '/comments')
        .then(function(response) {
            store.dispatch({type: 'COMMENTS_LOADED', payload: response.data})
        })
        .catch (function(err) {
            console.log(err)
        })
}

export function getAllUsers () {
    axios.get(root + '/users')
        .then(function(response) {
            store.dispatch({type: 'USERS_LOADED', payload: response.data})
        })
        .catch (function(err) {
            console.log(err)
        })
}
