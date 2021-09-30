import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

import './UsersPage.css'

export default function EditUserForm () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [ picture, setPicture ] = useState(sessionUser?.picture);
    const [ email, setEmail ] = useState(sessionUser?.email);
    const [ firstName, setFirstName ] = useState(sessionUser?.firstName);
    const [ lastName, setLastName ] = useState(sessionUser.lastName);
    const [ username, setUsername ] = useState(sessionUser.username);
    // const [ password, setPassword ] = useState('');
    // const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);

    const updatePic = (e) => setPicture(e.target.value);
    const updateEm = (e) => setEmail(e.target.value);
    const updateFN = (e) => setFirstName(e.target.value);
    const updateLN = (e) => setLastName(e.target.value);
    const updateUs = (e) => setUsername(e.target.value);

    // if (sessionUser) return <Redirect to='/'/>;

    const history = useHistory()
    let updatedUser

    // useEffect(() => {
    //     dispatch(sessionActions.restoreUser())
    // }, [dispatch])

    const handleSubmit = async (event) => {
        event.preventDefault();
        updatedUser = await dispatch(sessionActions.editUser({ picture, firstName, lastName, email, username }, sessionUser.id ))

        if (updatedUser) {
            history.push(`/user/${updatedUser.user.id}`)
            history.go(0)
        }
    };

    if (updatedUser){
        return <Redirect to={`/user/${updatedUser.user.id}`}/>
    }


    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className='user-container'>
            <div className='user-image-container'>
                <img className='user-upload' src={picture}/>
            </div>
                <div className='form-container'>
                    <div className='email-conmtainer container-lot'>
                        <div className='email-label'>
                            <label className='email-label'> Add a picture
                                <div className='input-lot'>
                                    <input
                                        type='text'
                                        value={picture}
                                        onChange={updatePic}
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='email-conmtainer container-lot'>
                        <div className='email-label'>
                            <label className='email-label'> First Name
                                <div className='input-lot'>
                                    <input
                                        type='text'
                                        value={firstName}
                                        onChange={updateFN}
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='email-conmtainer container-lot'>
                        <div className='email-label'>
                            <label className='email-label'> Last Name
                                <div className='input-lot'>
                                    <input
                                        type='text'
                                        value={lastName}
                                        onChange={updateLN}
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='email-conmtainer container-lot'>
                        <div className='email-label'>
                            <label className='email-label'> Email
                                <div className='input-lot'>
                                    <input
                                        type='email'
                                        value={email}
                                        onChange={updateEm}
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className='username-container container-lot'>
                        <div className='username-label'>
                            <label className='email-label'> Username
                                <div className='input-lot'>
                                    <input
                                        type='text'
                                        value={username}
                                        onChange={updateUs}
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* <div className='pass-container container-lot'>
                        <div className='password-label'></div>
                            <label className='email-label'> Password
                                <div className='input-lot'>
                                    <input
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='input-area'
                                    />
                            </div>
                        </label>
                    </div>
                    <div className='confirmPass-container container-lot'>
                        <label className='email-label'> Confirm Password
                            <div className='input-lot'>
                                <input
                                    type='password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='input-area'
                                />
                            </div>
                        </label>
                    </div> */}
                    <div className='button-container'>
                        <button className='submit-button' type='submit'>Update</button>
                        {/* <button className='submit-button' type='button'>cancel</button> */}
                    </div>
                    <ul className='errors'>
                        {errors.map((err, idx) => (
                            <li className='error-msg' key={idx}> 👎 - - {err}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </form>
    )
}
