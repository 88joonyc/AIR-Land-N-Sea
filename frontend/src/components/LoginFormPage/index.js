import React, { useState } from "react";
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import './index.css'

export default function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [ credential, setCredential ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);

    if ( sessionUser ) return (
        <Redirect to='/'/>
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({credential, password}))
            .catch(async (res) => {
                const data = await res.json();
                if ( data && data.errors ) setErrors(data.errors)
            });
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className='container'>
                <div className='login-container'>
                    <div className="login-form">
                        <label className='username-label'> Username
                            <div className='input-lot'>
                                <input
                                    type="text"
                                    value={credential}
                                    onChange={(e) => setCredential(e.target.value)}
                                    required
                                    className='input-area'
                                />
                            </div>
                        </label>
                        <label className='password-label'> Password
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
                        <button className='signin-button' type="submit">Sign in</button>
                        <ul className='errors'>
                            {errors.map((err, idx) => {
                                return <li className='error-msg' key={idx}> 👎 - - {err} </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    )
}
