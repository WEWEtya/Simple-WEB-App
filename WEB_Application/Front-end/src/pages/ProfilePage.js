import React from 'react';

const ProfilePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>
            {user
                ? <>Hello <b>{user.username}</b></>
                : "Hello"}
        </div>
    );
}

export default ProfilePage;

