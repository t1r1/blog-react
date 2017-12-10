import React from 'react'

class Comments extends React.Component {

    getCommentsByPostId() {
        let comments = this.props.comments.filter((item) => {
            return item.postId === this.props.postId
        })
        console.log(comments)
        return comments
    }
    render () {
        return (
            <div>{this.getCommentsByPostId().map((item) => 
                <div className="comment" key={item.id}>
                    <b>{item.email} commented: </b>
                    {item.body}
                </div>
            )}</div>
        )
    }
}

export default Comments