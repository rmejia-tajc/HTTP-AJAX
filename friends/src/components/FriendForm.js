import React from 'react';

function FriendForm(props) {
    

    return (
        <div>
            <h2>Add a Friend</h2>
            <form>

                <input
                    type="text"
                    name="name"
                    value="name"
                    placeholder="NAME"
                />
                
                <input
                    type="number"
                    name="age"
                    value="age"
                    placeholder="AGE"
                />
                
                <input
                    type="text"
                    name="email"
                    value="email"
                    placeholder="EMAIL"
                />

                <button>
                    ADD A FRIEND
                </button>

            </form>
        </div>
    )
}


export default FriendForm