import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as bookAction from '../../store/bookings';

// import './ToysDetail.css'

export default function EditBookings ({bookId, booking, hideForm}) {

    console.log(bookId)

    // console.log('these are booking props',booking.user.Bookings)
    const dispatch = useDispatch();
    const { toyId } = useParams()

    const bookings = useSelector((state) => state.bookings[bookId])
    const calStart = bookings?.startDate.split("T")[0]
    const calEnd = bookings?.endDate.split("T")[0]

    const sessionUser = useSelector(state => state.session.user);
    const toy = useSelector((state) => state.toys[toyId])

    const history = useHistory();
    const [startDate, setStart] = useState(calStart)
    const [endDate, setEnd] = useState(calEnd)


    const updateStart = (e) => setStart(e.target.value)
    const updateEnd = (e) => setEnd(e.target.value)

    useEffect(() => {
        dispatch(bookAction.getBookings())
    }, [dispatch, toyId]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const payload = {
            startDate,
            endDate
        }

        //clean this upp!
        // const bookedStart = bookings[0].startDate;

        let update = dispatch(bookAction.updateBooking(payload, bookId))
        console.log("update", update)
        window.alert('Update is made!')
        history.go(0)

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
        hideForm();
    }

    async function deleteRes(e){
        e.preventDefault();
        let deleted = dispatch(bookAction.deleteBooking(bookId))

        console.log(deleted)
        if (deleted) {
            window.alert('Booking has been sucessfully deleted')
            history.push('/')
            history.go(0)
        }
    }

    return (
        <>
            {toy?.Images.map(img => {
                return (
                    <div className='img-container'>
                        <img key={img.id} src={img.url} alt='toy car plane'/>
                    </div>
                )
            })}
                <>
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
                                    onChange={updateStart}
                                />
                                <label htmlFor='end'>End rental</label>
                                <input
                                    type='date'
                                    value={endDate}
                                    onChange={updateEnd}
                                />
                                <button className='reserve-button' type='submit'>Edit Reservation</button>
                                <button
                                    className='reserve-button'
                                    onClick={deleteRes}
                                    type='button'
                                >Cancel Reservation</button>
                                <button
                                    className='reserve-button'
                                    onClick={handleCancel}
                                    type='button'
                                >Cancel edit</button>
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
        </>
    )
}
