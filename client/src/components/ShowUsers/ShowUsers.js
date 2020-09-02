import React from 'react';
import './ShowUsers.css';
import onlineIcon from '../../icons/onlineIcon.png';

const ShowUsers = ({users}) => {
    console.log('userssss', users)
    
    return (
        <div className="users">
            <div className="bar">
                Who joined
            </div>
            {users.map(user => 
            <div className="user">
                <img className="onlineIcon" src={onlineIcon} alt="online"/>
                {user.name}
            </div>)}
        </div>
    )
}

export default ShowUsers;