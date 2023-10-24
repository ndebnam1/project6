import React from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
}
from '@mui/material';
import './userList.css';
import fetchModel from "../../lib/fetchModelData";
import User from "../../schema/user";

/**
 * Define UserList, a React component of project #5
 */
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: User,
            user_id: undefined  
                
            };
    }

    componentDidMount() {
        this.handleUserListChange();
    }

    componentDidUpdate() {
        const new_user_id = this.props.match?.params.userId;
        //console.log(new_user_id);
        const current_user_id = this.state.user_id;
        //console.log(current_user_id);
        if (current_user_id  !== new_user_id){
            this.handleUserChange(new_user_id);
        }
    }

    handleUserChange(user_id){
        this.setState({
            user_id: user_id
        });
    }

    handleUserListChange(){
        fetchModel("/user/list")
            .then((response) =>
            {
                this.setState({
                    users: response.data
                });
            });
    }

  render() {
    return this.state.users ?(
        <div>
        <List component="nav">
            
        </List>
        </div>
    ) : (
        <div/>
    );
  }
}

export default UserList;
