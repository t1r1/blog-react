import React from 'react'
import Post from './post'
import { connect } from 'react-redux'


class PostsList extends React.Component {

    render() {
        let {posts} = this.props
        return(
            <div>
                {posts.map(item => 
                    <Post 
                        key={item.id} 
                        postId={item.id}
                        title={item.title}
                        body={item.body}
                        userId={item.userId}
                        showComments={false}
                        />)
                }        
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)