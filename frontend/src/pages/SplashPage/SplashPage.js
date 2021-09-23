import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToys } from '../../store/toys';

import './SplashPage.css'


export default function SplashPage () {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state?.session)
    const toys = useSelector((state) => state.toys.toys)


    function openEditBooking(e) {
        e.preventDefault();
    }

    useEffect(() => {
    //     dispatch(getBooking(sessionUser?.id));
    //     dispatch(getBookings())
    //     dispatch(getOneBooking(bookings?.id))

           dispatch(getToys())
    }, [dispatch]);

    return (
        <div className='spash-container'>
                <div className='splash-first'>
                    <div className='splash-find-toy'>
                        <div className='splash-text-container'>
                            <h1 className='splash-find-print'>Find your new fast toy on Air Land-N-Sea!</h1>
                            <p className='splash-find-print'>Explore the skies or go sailing in the blue sea~ Find your next adventure with us!</p>
                            <label className="splash-find-text" htmlFor='location'>LOCATION</label>
                            <input
                                name='location'
                                className='splash-find-inputext'
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
                                <select className="splash-find-select">
                                    <option>- select -</option>
                                </select>
                                <select className="splash-find-select">
                                    <option>- select -</option>
                                </select>
                            </div>
                                <a href='login' className='search-button'> 🔍 Search</a>
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
                    <h1 className='worlds-largest'>The world's largest car <br/> sharing marketplace<div className='worlds-block'></div></h1>
                </div>
                <div className='try-hosting-null'>
                    {/* <h1>Browse by Make</h1> */}
                    {/* {toys?.map(toy => {
                        console.log(toy)
                    })} */}

                </div>
                    <h1>Meet the hosts</h1>
                <div className='meet-the-hosts'>
                    <div className='review-side-scoll'>
                        {toys?.map(toy => (
                            <div className='hosts-box'>
                                <h1>{toy.id}</h1>
                                {/* <img src={toy.Images[0].url}/> */}
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
