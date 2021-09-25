import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SplashPage from '../SplashPage/SplashPage';
import { getOneBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';
import EditBookings from '../../components/EditBookings/EditBookings';
import EditToys from '../UsersToy/UsersToy';

import './HomePage.css'

export default function Home () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user);
    const bookings = useSelector((state) => state?.bookings?.bookings)
    const [elementId, setElementId] = useState(null)

    const toys = useSelector((state) => state.toys)

    useEffect(() => {
        dispatch(getOneBooking(sessionUser?.id))
        // dispatch(getOneToy(sessionUser?.id))
    }, [dispatch, sessionUser]);

    let content = null;

    if (elementId) {
        content = (
            <EditBookings
                bookId={elementId}
                booking={bookings}
                hideForm={() => setElementId(null)}
            />
        )
    } else {
        content = (
            <div className='home-body-container'>
                <EditToys/>
                <div className='home-body'>
                    <div className='bookings-container'>
                            {bookings?.map(book =>(
                                <>
                                    <div className='booking-container'>
                                        Booking ?for<h2>{book?.id}</h2>
                                        does this work?
                                        <h2>{book?.startDate}</h2>
                                        <h2>{book?.endDate}</h2>
                                        <button className='edit-button' onClick={()=> setElementId(book?.id)}>edit booking</button>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {sessionUser ? content : <SplashPage />}
        </>
    )
}
