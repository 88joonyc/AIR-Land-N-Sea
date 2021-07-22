import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';
import { get } from 'js-cookie';
import { getSession } from '../../store/session';

import EditUserToy from './EditUsersToy';


// import ToysDetail from './ToysDetail'

import './UsersToy.css'

export default function EditToys () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [shoeEditForm, setShowEditForm] = useState(false)
    const toys = sessionUser?.Toys

    useEffect(() => {
        dispatch(getSession(sessionUser.id));
        setShowEditForm(false)

    }, [dispatch]);

    let content = null;

    if (shoeEditForm) {
        content = (
            <EditUserToy
                toys={toys}
                hideForm={() => setShowEditForm(false)}
            />
        )
    }

    return (
        <>
            {toys?.map(el => (
                <>
                <div className='each-toy' >
                    {/* <Link key={el.id} to={`/toys/edit/${el.id}`}> */}
                        <h2>{el.id}</h2>
                        <h2>{el.year}</h2>
                        <h2>{el.make}</h2>
                        <h2>{el.model}</h2>
                        <button onClick={() => setShowEditForm(true)}>edit</button>
                    {/* </Link> */}
                </div>
                </>
            ))}
        </>

    )
}
