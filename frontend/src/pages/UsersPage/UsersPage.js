import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';

import EditUserForm from './EditUserForm'


// import ToysDetail from './ToysDetail'

// import './ToysPage.css'

export default function UsersPage () {
    const dispatch = useDispatch();
    // const { userId } = useParams()

    const sessionUser = useSelector(state => state.session.user)

    const [ picture, setPicture ] = useState(sessionUser.picture);
    const [ email, setEmail ] = useState(sessionUser.email);
    const [ firstName, setFirstName ] = useState(sessionUser.firstName);
    const [ lastName, setLastName ] = useState(sessionUser.lastName);
    const [ username, setUsername ] = useState(sessionUser.username);
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ errors, setErrors ] = useState([]);


    let [ showEditUser, setShowEditUser ] = useState(false);

    // if (sessionUser) return <Redirect to='/'/>;

    let content = null

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (password === confirmPassword) {
        //     setErrors([]);
        //     return dispatch(sessionActions.editUser({picture, firstName, lastName, email, username, password}))
        //         .catch(async (res) => {
        //             const data = await res.json();
        //             if ( data && data.errors ) setErrors(data.errors);
        //         });
        // };
        // return setErrors(['Passwords fields must match!'])
        dispatch(sessionActions.editUser({picture, firstName, lastName, email, username, password}, sessionUser.id ))
    };
    showEditUser = (event) => {
        event.preventDefault();

    };

    useEffect(() => {
        setShowEditUser(false)
    }, [])

    if (showEditUser) {
        content = (

                <EditUserForm
                    sessionUser={sessionUser}
                    hideForm={() => setShowEditUser(false)}
                />

        )
    } else {
        content = ( <></>  )
    }

    return (
        // <div>
        //          <>

        //     <div className='container'>
        //     <div>
        //         <img src={picture}/>
        //     </div>
        //         <div className='form-container'>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Add a picture
        //                         <div className='input-lot'>
        //                             <b>picture </b> {picture}
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> First Name
        //                         <div className='input-lot'>
        //                             <b>fn</b> {firstName}
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Last Name
        //                         <div className='input-lot'>
        //                             <b> ln</b>  {lastName}
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Email
        //                         <div className='input-lot'>
        //                             <b>email</b> {email}
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='username-container container-lot'>
        //                 <div className='username-label'>
        //                     <label className='email-label'> Username
        //                         <div className='input-lot'>
        //                             <b>user</b> {username}
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             {/* <div className='pass-container container-lot'>
        //                 <div className='password-label'></div>
        //                     <label className='email-label'> Password
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='password'
        //                                 value={password}
        //                                 onChange={(e) => setPassword(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className='confirmPass-container container-lot'>
        //                 <label className='email-label'> Confirm Password
        //                     <div className='input-lot'>
        //                         <input
        //                             type='password'
        //                             value={confirmPassword}
        //                             onChange={(e) => setConfirmPassword(e.target.value)}
        //                             className='input-area'
        //                         />
        //                     </div>
        //                 </label>
        //             </div> */}
        //             <div className='button-container'>
        //                 <button className='submit-button' type='submit'>Update</button>
        //                 <button onClick={() => setShowEditUser(true)} className='submit-button' type='button'>Edit</button>
        //             </div>
        //             <ul className='errors'>
        //                 {errors.map((err, idx) => (
        //                     <li className='error-msg' key={idx}> 👎 - - {err}</li>
        //                 ))}
        //             </ul>
        //         </div>
            // </div>

<>
                {content}
        </>
        // </div>
    )

}






// <>
//               <div className='container'>
//             <div>
//                 <img src={picture}/>
//             </div>
//                 <div className='form-container'>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Add a picture
//                                 <div className='input-lot'>
//                                     <b>picture </b> {picture}
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> First Name
//                                 <div className='input-lot'>
//                                     <b>fn</b> {firstName}
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Last Name
//                                 <div className='input-lot'>
//                                     <b> ln</b>  {lastName}
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Email
//                                 <div className='input-lot'>
//                                     <b>email</b> {email}
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='username-container container-lot'>
//                         <div className='username-label'>
//                             <label className='email-label'> Username
//                                 <div className='input-lot'>
//                                     <b>user</b> {username}
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     {/* <div className='pass-container container-lot'>
//                         <div className='password-label'></div>
//                             <label className='email-label'> Password
//                                 <div className='input-lot'>
//                                     <input
//                                         type='password'
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className='input-area'
//                                     />
//                             </div>
//                         </label>
//                     </div>
//                     <div className='confirmPass-container container-lot'>
//                         <label className='email-label'> Confirm Password
//                             <div className='input-lot'>
//                                 <input
//                                     type='password'
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     className='input-area'
//                                 />
//                             </div>
//                         </label>
//                     </div> */}
//                     <div className='button-container'>
//                         <button className='submit-button' type='submit'>Update</button>
//                         {/* <button onClick={setShowEditUser(true)} className='submit-button' type='button'>cancel</button> */}
//                     </div>
//                     <ul className='errors'>
//                         {errors.map((err, idx) => (
//                             <li className='error-msg' key={idx}> 👎 - - {err}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             <tbody>
//                 {/* <EditUserForm sessionUser={sessionUser} /> */}
//             </tbody>
//         </>














 // <form
        //     onSubmit={handleSubmit}
        // >
        //     <div className='container'>
        //     <div>
        //         <img src={picture}/>
        //     </div>
        //         <div className='form-container'>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Add a picture
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='text'
        //                                 value={picture}
        //                                 onChange={(e) => setPicture(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> First Name
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='text'
        //                                 value={firstName}
        //                                 onChange={(e) => setFirstName(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Last Name
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='text'
        //                                 value={lastName}
        //                                 onChange={(e) => setLastName(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='email-conmtainer container-lot'>
        //                 <div className='email-label'>
        //                     <label className='email-label'> Email
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='email'
        //                                 value={email}
        //                                 onChange={(e) => setEmail(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             <div className='username-container container-lot'>
        //                 <div className='username-label'>
        //                     <label className='email-label'> Username
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='text'
        //                                 value={username}
        //                                 onChange={(e) => setUsername(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                         </div>
        //                     </label>
        //                 </div>
        //             </div>
        //             {/* <div className='pass-container container-lot'>
        //                 <div className='password-label'></div>
        //                     <label className='email-label'> Password
        //                         <div className='input-lot'>
        //                             <input
        //                                 type='password'
        //                                 value={password}
        //                                 onChange={(e) => setPassword(e.target.value)}
        //                                 className='input-area'
        //                             />
        //                     </div>
        //                 </label>
        //             </div>
        //             <div className='confirmPass-container container-lot'>
        //                 <label className='email-label'> Confirm Password
        //                     <div className='input-lot'>
        //                         <input
        //                             type='password'
        //                             value={confirmPassword}
        //                             onChange={(e) => setConfirmPassword(e.target.value)}
        //                             className='input-area'
        //                         />
        //                     </div>
        //                 </label>
        //             </div> */}
        //             <div className='button-container'>
        //                 <button className='submit-button' type='submit'>Update</button>
        //             </div>
        //             <ul className='errors'>
        //                 {errors.map((err, idx) => (
        //                     <li className='error-msg' key={idx}> 👎 - - {err}</li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>
        // </form>










// import React, { useEffect, useState } from 'react';
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
//     // const [ password, setPassword ] = useState('');
//     // const [ confirmPassword, setConfirmPassword ] = useState('');
//     const [ errors, setErrors ] = useState([]);

//     const updatePic = (e) => setPicture(e.target.value);
//     const updateEm = (e) => setEmail(e.target.value);
//     const updateFN = (e) => setFirstName(e.target.value);
//     const updateLN = (e) => setLastName(e.target.value);
//     const updateUs = (e) => setUsername(e.target.value);

//     // if (sessionUser) return <Redirect to='/'/>;

//     console.log(sessionUser)

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // if (password === confirmPassword) {
//         //     setErrors([]);
//         //     return dispatch(sessionActions.editUser({picture, firstName, lastName, email, username, password}))
//         //         .catch(async (res) => {
//         //             const data = await res.json();
//         //             if ( data && data.errors ) setErrors(data.errors);
//         //         });
//         // };
//         // return setErrors(['Passwords fields must match!'])

//         dispatch(sessionActions.editUser({ picture, firstName, lastName, email, username }, sessionUser.id ))
//     };

//     useEffect(() => {

//     })

//     return (
//         <form
//             onSubmit={handleSubmit}
//         >
//             <div className='container'>
//             <div>
//                 <img src={picture}/>
//             </div>
//                 <div className='form-container'>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Add a picture
//                                 <div className='input-lot'>
//                                     <input
//                                         type='text'
//                                         value={picture}
//                                         onChange={(e) => setPicture(updatePic)}
//                                         // onChange={(e) => setPicture(e.target.value)}
//                                         className='input-area'
//                                     />
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> First Name
//                                 <div className='input-lot'>
//                                     <input
//                                         type='text'
//                                         value={firstName}
//                                         onChange={(e) => setFirstName(updateFN)}
//                                         className='input-area'
//                                     />
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Last Name
//                                 <div className='input-lot'>
//                                     <input
//                                         type='text'
//                                         value={lastName}
//                                         onChange={(e) => setLastName(updateLN)}
//                                         className='input-area'
//                                     />
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='email-conmtainer container-lot'>
//                         <div className='email-label'>
//                             <label className='email-label'> Email
//                                 <div className='input-lot'>
//                                     <input
//                                         type='email'
//                                         value={email}
//                                         onChange={(e) => setEmail(updateEm)}
//                                         className='input-area'
//                                     />
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     <div className='username-container container-lot'>
//                         <div className='username-label'>
//                             <label className='email-label'> Username
//                                 <div className='input-lot'>
//                                     <input
//                                         type='text'
//                                         value={username}
//                                         onChange={(e) => setUsername(updateUs)}
//                                         className='input-area'
//                                     />
//                                 </div>
//                             </label>
//                         </div>
//                     </div>
//                     {/* <div className='pass-container container-lot'>
//                         <div className='password-label'></div>
//                             <label className='email-label'> Password
//                                 <div className='input-lot'>
//                                     <input
//                                         type='password'
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className='input-area'
//                                     />
//                             </div>
//                         </label>
//                     </div>
//                     <div className='confirmPass-container container-lot'>
//                         <label className='email-label'> Confirm Password
//                             <div className='input-lot'>
//                                 <input
//                                     type='password'
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     className='input-area'
//                                 />
//                             </div>
//                         </label>
//                     </div> */}
//                     <div className='button-container'>
//                         <button className='submit-button' type='submit'>Update</button>
//                         <button className='submit-button' type='button'>Update</button>
//                     </div>
//                     <ul className='errors'>
//                         {errors.map((err, idx) => (
//                             <li className='error-msg' key={idx}> 👎 - - {err}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </form>
//     )
// }
