import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createBooking } from '../../store/bookings';

export default function Bookings () {

    const dispatch = useDispatch();
    const bookings = useSelector((state) => Object.values(state.bookings))

    console.log(bookings)

    useEffect(() => {
        dispatch(createBooking());
    }, [dispatch]);

    return (
        <>
            {bookings.map(booking => {
                return (
                    <>
                        <h3>{booking.toyId}</h3>
                        <h3>{booking.userId}</h3>
                        <h3>{booking.startDate}</h3>
                        <h3>{booking.endDate}</h3>
                    </>
                )
            })}
        </>
    )
}
