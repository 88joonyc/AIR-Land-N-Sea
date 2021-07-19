import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

export default function Bookings () {

    const dispatch = useDispatch();
    const { toysId } = useParams()
    const bookings = useSelector((state) => Object.values(state.bookings))
    const toys = useSelector((state) => Object.values(state.toys))

    // console.log(toysId)

    // console.log(bookings)

    useEffect(() => {
        dispatch(createBooking());
        dispatch(getOneToy(toysId));
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
            <h2>{toys.id}</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
        </>
    )
}
