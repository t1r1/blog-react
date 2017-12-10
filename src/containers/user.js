import React from 'react'
import { connect } from 'react-redux'


class User extends React.Component {

    getUserName() {
        let currentUser = this.props.allUsers.find((item) => {
            return item.id === this.props.userId
        })
        
        if (currentUser) {
            return currentUser.name
        }
        else {
            return ''
        }
    }

    render() {
        return(
           <span className="user"> {this.getUserName()}</span>
        )
    }
}

function mapStateToProps(state) {
    return {
        allUsers: state.users
    }
}

export default connect(mapStateToProps)(User)