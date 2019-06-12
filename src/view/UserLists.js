import React from 'react';
import Users from '../shared/users';
import Boxpost from './Boxpost';


const UserLists = () => {
    const elements = Users.map((post, i) => <Boxpost key={i} name={Users.name.first} email={Users.email} img={Users.picture.thumbnail} date={Users.dob.date} />);

    return (
        <React.Fragment>
            {elements}
        </React.Fragment>
    )

}

export default UserLists;