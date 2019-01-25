import React from 'react';

function FriendForm(props) {
    function handleSubmit(event) {
      event.preventDefault();
      if (props.isUpdating) {
        props.updateFriend();
      } else {
        props.addFriend();
      }
    }
    

    return (
        <div>
            <h2>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='name'
                    value={props.friend.name}
                    placeholder='NAME'
                    onChange={props.handleChanges}
                />
                
                <input
                    type='number'
                    name='age'
                    value={props.friend.age}
                    placeholder='AGE'
                    onChange={props.handleChanges}
                />
                
                <input
                    type='text'
                    name='email'
                    value={props.friend.email}
                    placeholder='EMAIL'
                    onChange={props.handleChanges}
                />

                <button type='submit'>
                    {props.isUpdating ? 'Update Friend' : 'Add New Friend'}
                </button>

            </form>
        </div>
    )
}


export default FriendForm