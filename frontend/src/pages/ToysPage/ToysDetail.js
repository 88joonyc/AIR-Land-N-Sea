import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    // const bookings = useSelector((state) => Object.values(state.bookings))
    const sessionUser = useSelector(state => state.session.user);
    const toy = useSelector((state) => Object.values(state)[1])

    const [startDate, setStart] = useState('')
    const [endDate, setEnd] = useState('')

    useEffect(() => {
        dispatch(getOneToy(toyId));
    }, [toyId, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const payload = {
            toyId: Number(toyId),
            userId,
            startDate,
            endDate
        }

        dispatch(createBooking(payload))

    };

    return (
        <>
            <div className='info-container'>
                <h2>{toy.id}</h2>
                <h2>{toy.description}</h2>
                <h2>{toy.year}</h2>
                <h2>{toy.make}</h2>
                <h2>{toy.model}</h2>
                <h2>{toy.id}</h2>
            </div>
            <div className='booking-form'>
                <form
                    onSubmit={handleSubmit}
                >
                    <label
                        htmlFor='start'
                        >Start rental</label>
                    <input
                        type='date'
                        onChange={(e) => setStart(e.target.value)}
                    />
                    <label htmlFor='end'>End rental</label>
                    <input
                        type='date'
                        onChange={(e) => setEnd(e.target.value)}
                    />
                    <div>price</div>
                    <div>{toy.price}</div>
                    <button type='submit'>Reserve</button>
                </form>
            </div>
        </>
    )
}
