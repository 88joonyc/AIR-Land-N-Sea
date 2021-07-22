import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getBookings } from '../../store/bookings';
import { getBooking } from '../../store/session';

import './HomePage.css'


export default function Home () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const bookings = useSelector((state) => state.session)

    const userBooked = bookings?.user.Bookings

    console.log(userBooked)

    useEffect(() => {
        dispatch(getBooking(sessionUser.id));
        // dispatch(getBookings());

    }, [dispatch]);

    return (
        <>
            {userBooked.map(book =>(
                <>
                    <h2>{book.id}</h2>
                    <h2>{book.startDate}</h2>
                    <h2>{book.endDate}</h2>
                    <button onClick={}></button>
                </>
            ))}
        </>
    )
}
