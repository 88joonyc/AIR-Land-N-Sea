import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { createBooking, getOneBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';

import * as actionImage from '../../store/images'

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    const bookings = useSelector((state) => Object.values(state.bookings))
    const sessionUser = useSelector(state => state.session.user);
    const toy = useSelector((state) => state.toys[toyId])
    const images = useSelector((state) => state.images)

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
            <div className='info-container'>
                <h2>{toy?.id}</h2>
                <h2>{toy?.description}</h2>
                <h2>{toy?.year}</h2>
                <h2>{toy?.make}</h2>
                <h2>{toy?.model}</h2>
                <h2>{toy?.id}</h2>
            </div>
            <div className='image-container'>
                {/* {imgSet?.forEach(img => (
                    <img className='ii' alt={img?.id} src={img?.url} width="100px" height="100px"/>
                    console.log(img.url)
                ))} */}
                {    images.images.forEach(img => {
                    if (img.toyId === Number(toyId)) (
                        // <img src={img.url}/>
                        console.log(img.url)
                    )})
                }
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
                    <div>{toy?.price}</div>
                    <button type='submit'>Reserve</button>
                </form>
            </div>
        </>
    )
}
