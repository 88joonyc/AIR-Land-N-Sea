import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from 'react-router-dom';

import { getOneBooking } from '../../store/bookings';

import * as bookAction from '../../store/bookings';

import './EditBooking.css'

export default function EditBookings ({bookId, start, end, hideForm}) {

    const dispatch = useDispatch();
    const { toyId } = useParams()

    const calStart = start.split("T")[0]
    const calEnd = end.split("T")[0]

    const sessionUser = useSelector(state => state.session.user);
    const toy = useSelector((state) => state.toys[toyId])

    const [startDate, setStart] = useState(calStart)
    const [endDate, setEnd] = useState(calEnd)

    const updateStart = (e) => setStart(e.target.value)
    const updateEnd = (e) => setEnd(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const payload = {
            startDate,
            endDate
        }

        //clean this upp!
        // const bookedStart = bookings[0].startDate;
        if (startDate && endDate) {
            let update = await dispatch(bookAction.updateBooking(payload, bookId))
            dispatch(getOneBooking(sessionUser?.id))
            window.alert('Update is made!')
            hideForm(false)
        }

        // history.go(0)

        // if (bookings) {
        //     const bookedEnd = bookings.endDate;
        //     const bookdate = Date(bookedEnd)
        //     const start = Date(startDate)
        //     if (startDate > endDate) return console.error('date error')
        //     if (startDate > endDate ) {
        //         dispatch(updateBooking(payload, elementId))
        //         window.alert('Booking made!')
        //         history.go(0)
        //     } else  return window.alert('date is already booked!')
        // } else {
        //     dispatch(updateBooking(payload, elementId))
        //     window.alert('booking made!')
        //     history.go(0)
        // }
    };

    function handleCancel(e) {
        e.preventDefault();
        hideForm(false);
    }

    async function deleteRes(e){
        e.preventDefault();
        let deleted = dispatch(bookAction.deleteBooking(bookId))

        if (deleted) {
            dispatch(getOneBooking(sessionUser?.id))
            window.alert('Booking has been sucessfully deleted')
            hideForm()

        }
    }

    return (
        <>
            <div className='booking-back-container'>
                <div className='booking-edit-form'>
                    <button className='book-cancel-button' onClick={handleCancel} type='button'>X</button>
                    <form
                        onSubmit={handleSubmit}
                        >
                        <div>{toy?.price}</div>

                        <div className='date-area'>
                            <div className='book-timer'>
                                <div className='start-hour'>
                                    <label
                                        htmlFor='start'
                                        >Start date</label>
                                    <input
                                        type='date'
                                        value={startDate}
                                        onChange={updateStart}
                                        className='date-input'
                                    />
                                    {/* <label htmlFor='end'>Check-In</label>
                                    <input
                                        type='time'
                                        value={endDate}
                                        onChange={updateEnd}
                                    /> */}

                                </div>
                                <div className='end-hour'>
                                    <label
                                        htmlFor='start'
                                        >End date</label>
                                    <input
                                        type='date'
                                        value={endDate}
                                        onChange={updateEnd}
                                        className='date-input'
                                    />
                                    {/* <label htmlFor='end'>Check-out</label>
                                    <input
                                        type='time'
                                        value={null}
                                        onChange={null}
                                    /> */}

                                </div>

                            </div>
                            <div className='delete-edit-button'>
                                <button className='reserve-button' type='submit'>Edit Reservation</button>
                                <button className='reserve-button' onClick={deleteRes} type='button' >Cancel Reservation</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div className='bot-info-container'>
                    <h2>{toy?.description}</h2>
                    <h2>{toy?.year}</h2>
                    <h2>{toy?.make}</h2>
                    <h2>{toy?.model}</h2>
                    <h2>{toy?.id}</h2>
                </div> */}
            </div>
        </>
    )
}
