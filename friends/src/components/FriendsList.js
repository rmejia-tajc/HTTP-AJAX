import React from 'react';
import { Link } from 'react-router-dom';

function FriendList(props) {
    return (
        <div>
            {props.friends.map((friend) => (
                <Link to={`/List/${friend.id}`} key={friend.id} >
                    <h2>Name: {friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>email: {friend.email}</p>
                </Link>
            ))}
        </div>
    )
}



export default FriendList;