import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    // const bookings = useSelector((state) => Object.values(state.bookings))
    const toys = useSelector((state) => Object.values(state)[1])



    useEffect(() => {
        // dispatch(createBooking());

        dispatch(getOneToy(toyId));
    }, [toyId]);

    return (
        <>
            <div className='info-container'>
                <h2>{toys.id}</h2>
                <h2>{toys.description}</h2>
                <h2>{toys.year}</h2>
                <h2>{toys.make}</h2>
                <h2>{toys.model}</h2>
                <h2>{toys.id}</h2>
            </div>
            <div className='booking-form'>
                <form>
                    <label htmlFor='check-in'>Check In</label>
                    <input type='date'></input>
                    <label htmlFor='check-in'>Check Out</label>
                    <input type='date'></input>
                    <input type='hidden' value={toyId}></input>
                    <button type='submit'>Reserve</button>
                </form>
            </div>
        </>
    )
}
