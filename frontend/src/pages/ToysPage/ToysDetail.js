import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

export default function Bookings () {

    const dispatch = useDispatch();
    const { toyId } = useParams()
    // const bookings = useSelector((state) => Object.values(state.bookings))
    const toys = useSelector((state) => Object.values(state))


    console.log('toys', toys[1])

    // console.log(toyId)
    // console.log('detail toys:', toys)

    // console.log(bookings)

    useEffect(() => {
        // dispatch(createBooking());

        dispatch(getOneToy(toyId));
    }, [toyId]);

    return (
        <>
            <h2>{toys[1].id}</h2>
            <h2>{toys[1].description}</h2>
            <h2>{toys[1].year}</h2>
            <h2>{toys[1].make}</h2>
            <h2>{toys[1].model}</h2>
            <h2>{toys[1].id}</h2>
        </>
    )
}
