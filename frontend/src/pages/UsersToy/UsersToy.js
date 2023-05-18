import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneToy } from '../../store/toys';
import EditUserToy from './EditUsersToy';

import './UsersToy.css'

export default function EditToys () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user)
    const [elementId, setElementId] = useState(null)
    const toys = useSelector((state) => state?.toys?.toys)

    useEffect(() => {
        dispatch(getOneToy(sessionUser?.id))
    }, [dispatch, sessionUser]);

    let content = null;

    if (elementId) {
        content = (
            <EditUserToy
                toyId={elementId}
                toys={toys}
                hideForm={() => setElementId(null)}
            />
        )
    } else {
        content = (
            <div className='users-toys'>
                    {toys?.map(el => (
                        <>
                            <div className='each-toy' >
                                <div className='edit-toy-container'>
                                    <h2>{el?.id}</h2>
                                    <h2>{el?.year}</h2>
                                    <h2>{el?.make}</h2>
                                    <h2>{el?.model}</h2>
                                </div>
                                    <button
                                            onClick={() => setElementId(el.id)}
                                            className='edit-booking-button'
                                        >edit</button>
                                <div>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        )
    }

    return (
        <>
        {content}
        </>

    )
}
