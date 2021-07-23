import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';
import { getSession } from '../../store/session';

import EditUserToy from './EditUsersToy';


// import ToysDetail from './ToysDetail'

import './UsersToy.css'

export default function EditToys () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [elementId, setElementId] = useState(null)
    const toys = sessionUser?.Toys

    useEffect(() => {
        dispatch(getSession(sessionUser.id));
        dispatch(getToys())
    }, [dispatch]);

    let content = null;

    if (elementId) {
        content = (
            <EditUserToy
                toyId={elementId}
                toys={toys}
                hideForm={() => setElementId(null)}
            />
        )
    }

    return (
        <>
            {toys?.map(el => (
                <>
                <div className='each-toy' >
                        <h2>{el?.id}</h2>
                        <h2>{el?.year}</h2>
                        <h2>{el?.make}</h2>
                        <h2>{el?.model}</h2>
                        <button
                            onClick={() => setElementId(el.id)
                        }>edit</button>
                    <div>
                        {content}
                    </div>
                </div>
                </>
            ))}
        </>

    )
}
