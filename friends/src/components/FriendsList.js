import React from 'react';

function FriendList(props) {
    return (
        <div>
            {props.friends.map((friend) => (
                <div key={friend.id}>
                    <h2>Name: {friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>email: {friend.email}</p>
                </div>
            ))}
        </div>
    )
}



export default FriendList;