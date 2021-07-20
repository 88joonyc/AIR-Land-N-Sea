import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking, getOneBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

import * as actionImage from '../../store/images'

import './ToysDetail.css'

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    const bookings = useSelector((state) => Object.values(state.bookings))
    const sessionUser = useSelector(state => state.session.user);
    const toy = useSelector((state) => state.toys[toyId])
    const images = useSelector((state) => state.images)

    console.log(images)

    const [startDate, setStart] = useState('')
    const [endDate, setEnd] = useState('')

    // const imgSet = []
    // images.images.forEach(img => {
    //     if (img.toyId === Number(toyId)) return imgSet.push(img)
    // })

    useEffect(() => {
        dispatch(actionImage.getImages())
        dispatch(getOneBooking(toyId))
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

        console.log('error', bookings[0])
        const bookedStart = bookings[0].startDate;
        const bookedEnd = bookings[0].endDate;

        console.log(bookedStart)

        const bookdate = Date(bookedEnd)
        const start = Date(startDate)
        console.log(start > bookdate, start)
        if (startDate > endDate) return console.error('date error')

        if (start > bookdate ) {
            return dispatch(createBooking(payload))
        } else  return console.error('date is booked!!')

    };

    return (
        <>
            <div className='image-container'>
                <img className='image-sorurce' src='https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/tlSB-BlTTCarQTY1p9ToHA.1440x700.jpg'/>
            </div>
            <div className='top-info-container'>
                <h2>{toy?.year}</h2>
                <h2>{toy?.make}</h2>
                <h2>{toy?.model}</h2>
                <h2>{toy?.id}</h2>
            </div>
            <div className='booking-form'>
                <form
                    onSubmit={handleSubmit}
                    >
                    <div>{toy?.price}</div>
                    <div className='date-area'>
                        <label
                            htmlFor='start'
                            >Start rental</label>
                        <input
                            type='date'
                            value={startDate}
                            onChange={(e) => setStart(e.target.value)}
                        />
                        <label htmlFor='end'>End rental</label>
                        <input
                            type='date'
                            value={endDate}
                            onChange={(e) => setEnd(e.target.value)}
                        />
                        <button className='reserve-button' type='submit'>Reserve</button>
                    </div>
                </form>
            </div>
            <div className='bot-info-container'>
                <h2>{toy?.description}</h2>
                <h2>{toy?.year}</h2>
                <h2>{toy?.make}</h2>
                <h2>{toy?.model}</h2>
                <h2>{toy?.id}</h2>
            </div>
        </>
    )
}
