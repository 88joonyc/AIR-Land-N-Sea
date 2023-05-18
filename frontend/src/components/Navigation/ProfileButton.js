import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink,useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

export default function ProfileButton({user}) {
    const dispatch = useDispatch();
    const [ showMenu, setShowMenu ] = useState(false);

    const openMenu = (e) => {
        e.stopPropagation()
        if (showMenu) return;
        setShowMenu(!showMenu);
    };

    const history = useHistory();

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    const logout = () => {
        dispatch(sessionActions.loggingOut());
        history.push('/')
    };

    return (
        <>
        <div className='navigation-tab'>
            {/* <NavLink className='navi-button' to='/toys'>Rent</NavLink> */}
            <NavLink className='navi-button' to='/hosting'>Become a host</NavLink>
            <button className='user-button' onClick={openMenu}>
                <i className='menu menu-circle'>{user.username}</i>
                <img className='profile-pic' alt={user.picture} src={user.picture}/>
            </button>
            {showMenu && (
                <ul className='menu-dropdown'>
                    <li className='dropdown-items'>{user.email}</li>
                    <li>
                        <div className='edit-container'>
                            <NavLink className='edit-button-drop' activeClassName='edit-active' to={`/user/${user.id}`}>Edit user</NavLink>
                        </div>
                        <div className='edit-container'>
                            <NavLink className='edit-button-drop' activeClassName='edit-active' to={`/hosting`}>Become a host</NavLink>
                        </div>
                        {/* <div className='edit-container'>
                            <NavLink className='edit-button-drop' activeClassName='edit-active' to={`/about`}>About</NavLink>
                        </div> */}
                        <button className='logout-button-b edit-button-drop' onClick={() => logout()}>Log out</button>
                    </li>
                </ul>
            )}
        </div>
        </>
    )
}
