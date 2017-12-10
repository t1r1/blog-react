import React, { Component } from 'react'
import './App.css'
import { getAllUsers, getAllPosts, getAllComments } from './webapi/index.js'
import PostsList from './containers/posts-list'
import SinglePost from './containers/single-post'
import { Route } from 'react-router-dom'


class App extends Component {
  componentDidMount() {
    getAllUsers()
    getAllPosts()
    getAllComments()
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={PostsList} />
        <Route path="/posts/:postId" component={SinglePost}/>
      </div>
    );
  }
}

export default App;
