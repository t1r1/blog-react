import React from 'react'
import User from './user'
import Comments from './comments'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'


class Post extends React.Component {
    render() {
        return(
            <div>
                <h2 className="title"><Link to={`/posts/${this.props.postId}`}>{this.props.title}</Link></h2>
                <p>{this.props.body}</p>
                <span>by <User userId={this.props.userId}/></span>
                {this.props.showComments && <Comments comments={this.props.comments} postId={this.props.postId}/>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Post)