import React from 'react';
import { Route, NavLink } from 'react-router-dom';

function Friend(props) {

    const friend = props.friends.find(
        friend => `${friend.id}` === props.match.params.friendId
    );

    if (!friend) return <h2>Cannot find that friend!</h2>;

    return (
        <div>
            <div>
                <h2>Name: {friend.name}</h2>
                <p>Age: {friend.age}</p>
                <p>email: {friend.email}</p>
            </div>

            <button
                onClick = {event => props.populateForm(event, friend.id)}
            >
            UPDATE FRIEND
            </button>

            <button
                onClick = {event => props.deleteFriend(event, friend.id)}
            >
            DELETE FRIEND
            </button>
    
        </div>
    )
}



export default Friend;