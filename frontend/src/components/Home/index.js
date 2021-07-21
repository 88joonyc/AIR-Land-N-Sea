import './home.css'

import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';


export default function Home() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)
    // const [ picture, setPicture ] = useState(sessionUser.picture);
    // const [ email, setEmail ] = useState(sessionUser.email);
    // const [ firstName, setFirstName ] = useState(sessionUser.firstName);
    // const [ lastName, setLastName ] = useState(sessionUser.lastName);
    // const [ username, setUsername ] = useState(sessionUser.username);
    // const [ password, setPassword ] = useState('');
    // const [ confirmPassword, setConfirmPassword ] = useState('');
    // const [ errors, setErrors ] = useState([]);

    return (
        <>

        </>
    )
}




// import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router';


// // import ToysDetail from './ToysDetail'

// // import './ToysPage.css'

// export default function UsersPage () {
//     const dispatch = useDispatch();
//     const sessionUser = useSelector(state => state.session.user);
//     const [ picture, setPicture ] = useState(sessionUser.picture);
//     const [ email, setEmail ] = useState(sessionUser.email);
//     const [ firstName, setFirstName ] = useState(sessionUser.firstName);
//     const [ lastName, setLastName ] = useState(sessionUser.lastName);
//     const [ username, setUsername ] = useState(sessionUser.username);
//     const [ password, setPassword ] = useState('');
//     const [ confirmPassword, setConfirmPassword ] = useState('');
//     const [ errors, setErrors ] = useState([]);
