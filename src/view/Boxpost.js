import React from 'react';
import Users from '../shared/users'

const Boxpost = () => {

    return (
        <div className="user">
            <img src={Users.img} />
            <p>{Users.name}</p>
            <p>{Users.email}</p>
            <p>{Users.date}</p>
        </div>
    )
}


export default Boxpost;
