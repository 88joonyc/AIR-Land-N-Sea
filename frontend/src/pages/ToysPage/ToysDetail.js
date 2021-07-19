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
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
        </>
    )
}
