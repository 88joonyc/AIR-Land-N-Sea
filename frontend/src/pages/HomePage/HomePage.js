import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getBookings } from '../../store/bookings';
import { getBooking } from '../../store/session';
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
    }

    function openEditBooking(e) {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getBooking(sessionUser.id));
        dispatch(getBookings())
    }, [dispatch]);

    return (
        <>
            {userBooked?.map(book =>(
                <>
                    <h2>{book?.id}</h2>
                    <h2>{book?.startDate}</h2>
                    <h2>{book?.endDate}</h2>
                    <button onClick={()=> setElementId(book?.id)}>edit booking</button>
                </>
            ))}
            {content}
        </>
    )
}
