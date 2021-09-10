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
        <>
            <div className='spash-container'>
                <div className='splash-width-container'>
                    <div className='splash-first'>
                        <div className='splash-find-toy'>
                            <div className='splash-text-container'>
                                <h1 className='splash-find-print'>Find your new fast toy on Air Land-N-Sea!</h1>
                                <p className='splash-find-print'>Explore the skies or go sailing in the blue sea~ Find your next adventure with us!</p>
                                <label className="splash-find-text" htmlFor='location'>LOCATION</label>
                                <input
                                    name='location'
                                    className='splash-find-text'
                                    type='text'
                                />
                                <div className='splash-find-date'>
                                    <div>
                                        <label className="splash-find-text" htmlFor='location'>CHECK IN</label>
                                        <input
                                            name='location'
                                            className='splash-find-text'
                                            type='date'
                                        />
                                    </div>
                                    <div>
                                        <label className="splash-find-text" htmlFor='location'>CHECK OUT</label>
                                        <input
                                            name='location'
                                            className='splash-find-text'
                                            type='date'
                                        />
                                    </div>
                                </div>
                                <div className='splash-find-drop'>
                                    <select className="splash-find-text">
                                        <option>- select -</option>
                                    </select>
                                    <select className="splash-find-text">
                                        <option>- select -</option>
                                    </select>
                                </div>
                                    <button className='search-button'> 🔍 Search</button>
                            </div>
                        </div>
                        <img className='splash-opening-img'/>
                    </div>
                    <div className='try-hosting-null'>
                        <img className='splash-second-img'/>
                        <div className='splash-second-message'>
                            <h1 className='splash-second-text'>Try hosting</h1>
                            <p className='splash-para'>Earn up to $2,505/month by sharing your Toy in Location</p>
                            <button className='learn-more-button'>Learn more</button>
                        </div>
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
        </>
    )
}
