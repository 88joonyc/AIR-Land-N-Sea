import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SplashPage from './SplashPage';

import { getBookings, getOneBooking } from '../../store/bookings';
import { getBooking } from '../../store/session';
import EditBookings from '../../components/EditBookings/EditBookings';

import './HomePage.css'
import EditToys from '../UsersToy/UsersToy';


export default function Home () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user);
    const bookings = useSelector((state) => state?.session)

    const [elementId, setElementId] = useState(null)
    const toys = sessionUser?.Toys

    useEffect(() => {
        dispatch(getBooking(sessionUser?.id));
        dispatch(getBookings())
        dispatch(getOneBooking(bookings?.id))

    }, [dispatch, sessionUser?.id]);


    const userBooked = bookings?.user?.Bookings

    let content = null;

    if (elementId) {
        content = (
            <>
            <EditBookings
                bookId={elementId}
                booking={bookings}
                hideForm={() => setElementId(null)}
            />
            </>

        )
    } else {
        content = (
            <>
            <div className='home-body'>
                <div className='bookings-container'>
                        {userBooked?.map(book =>(
                            <>
                                <div className='booking-container'>
                                    Booking for<h2>{book?.id}</h2>
                                    <h2>{book?.startDate}</h2>
                                    <h2>{book?.endDate}</h2>
                                    <button className='edit-button' onClick={()=> setElementId(book?.id)}>edit booking</button>
                                </div>
                            </>
                        ))}
                </div>
            </div>
                <EditToys/>
            </>
        )
    }

    return (
        <>
            {sessionUser ? content : <SplashPage />}
        </>
    )
}
