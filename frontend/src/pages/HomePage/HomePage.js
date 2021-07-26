import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getBookings, getOneBooking } from '../../store/bookings';
import { getBooking } from '../../store/session';
import { getUsers } from '../../store/users';
import EditBookings from './EditBookings';

import './HomePage.css'


export default function Home () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const bookings = useSelector((state) => state.session)

    const [elementId, setElementId] = useState(null)

    const userBooked = bookings?.user.Bookings

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
            <div className='bookings-container'>
                    {userBooked?.map(book =>(
                        <>
                            <div className='booking-container'>
                                Booking for <h2>{book?.id}</h2>
                                <h2>{book?.startDate}</h2>
                                <h2>{book?.endDate}</h2>
                                <button className='edit-button' onClick={()=> setElementId(book?.id)}>edit booking</button>
                            </div>
                        </>
                    ))}
            </div>
        )
    }

    function openEditBooking(e) {
        e.preventDefault();
    }

    console.log('this is bookings',bookings)

    useEffect(() => {
        dispatch(getBooking(sessionUser.id));
        dispatch(getBookings())
        dispatch(getOneBooking(bookings.id))
    }, [dispatch]);

    return (
        <>
            {content}
        </>
    )
}
