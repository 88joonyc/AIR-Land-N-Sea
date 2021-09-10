import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SplashPage.css'


export default function SplashPage () {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state?.session)


    function openEditBooking(e) {
        e.preventDefault();
    }

    // useEffect(() => {
    //     dispatch(getBooking(sessionUser?.id));
    //     dispatch(getBookings())
    //     dispatch(getOneBooking(bookings?.id))
    // }, [dispatch]);

    return (
        <div className='body'>
            <div className='spash-container'>
                <div>
                    <img className='splash-opening-img'/>
                </div>
                <div className='try-hosting-top'>
                    <h1>hello</h1>
                </div>
                <div className='try-hosting-null'>
                    <h1>hello</h1>
                </div>
                <div className='try-hosting-null'>
                    <h1>hello</h1>
                </div>
                <div className='try-hosting-null'>
                    <h1>hello</h1>
                </div>
                <div className='try-hosting-null'>
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    )
}
