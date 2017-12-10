import React from 'react'
import Post from './post'
import { connect } from 'react-redux'


class SinglePost extends React.Component {

    getPostObject() {
        let {postId} = this.props.match.params
        postId = parseInt(postId, 10)
        let post = this.props.posts.find(
            item => {
                return postId === item.id
            }
        )
        return post
    }

    render() {
        let item = this.getPostObject()
        return(
            item ?
            <Post 
                postId={item.id}
                title={item.title}
                body={item.body}
                userId={item.userId}
                showComments={true} /> : ""
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(SinglePost)