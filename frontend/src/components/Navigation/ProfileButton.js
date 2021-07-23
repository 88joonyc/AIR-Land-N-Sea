import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink,useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

export default function ProfileButton({user}) {
    const dispatch = useDispatch();
    const [ showMenu, setShowMenu ] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const history = useHistory();

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    const logout = (event) => {
        event.preventDefault();
        dispatch(sessionActions.loggingOut());
        history.push('/')
        history.go(0)
    };

    return (
        <>
        <NavLink className='navi-button' to='/toys'>Rent a toy</NavLink>
        <NavLink className='navi-button' to='/hosting'>Become a host</NavLink>
        <div className='navigation-tab'>
            <button className='user-button' onClick={openMenu}>
                <i className='menu menu-circle'>{user.username}</i>
                <img className='profile-pic' alt={user.picture} src={user.picture}/>
            </button>
            {showMenu && (
                <ul className='menu-dropdown'>
                    <li className='dropdown-items'>{user.email}</li>
                    <li>
                        <NavLink className='navi-button' to='/toy/edit'>Edit toy</NavLink>
                        <NavLink className='navi-button' to={`/user/${user.id}`}>Edit user</NavLink>
                        <button className='logout-button' onClick={logout}>Log out</button>
                    </li>
                </ul>
            )}
        </div>
        </>
    )
}
