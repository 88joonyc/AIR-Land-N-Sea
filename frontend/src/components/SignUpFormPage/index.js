import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import './SignUp.css'

export default function SignUpFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [ email, setEmail ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);

    if (sessionUser) return <Redirect to='/'/>;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signUpUser({firstName, lastName, email, username, password}))
                .catch(async (res) => {
                    const data = await res.json();
                    if ( data && data.errors ) setErrors(data.errors);
                });
        };
        return setErrors(['Passwords fields must match!'])
    };

    return (
        <div className='signup-body'>
            <form
                onSubmit={handleSubmit}
            >
                <div className='signup-container'>
                    <div className='form-container'>
                        <div className='email-conmtainer container-lot'>
                            <div className='email-label'>
                                <label className='email-label'> First Name
                                    <div className='input-lot'>
                                        <input
                                            type='text'
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
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
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
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
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
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
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            className='input-area'
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='pass-container container-lot'>
                            <div className='password-label'></div>
                                <label className='email-label'> Password
                                    <div className='input-lot'>
                                        <input
                                            type='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
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
                                        required
                                        className='input-area'
                                    />
                                </div>
                            </label>
                        </div>
                        <ul className='errors'>
                            {errors.map((err, idx) => (
                                <li className='error-msg' key={idx}> 👎 - - {err}</li>
                            ))}
                        </ul>
                        <div className='button-container'>
                            <button className='submit-button' type='submit'>Sign up</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
