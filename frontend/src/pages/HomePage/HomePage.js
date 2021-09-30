import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'

import SplashPage from '../SplashPage/SplashPage';
import { getOneBooking } from '../../store/bookings';
import { getOneToy } from '../../store/toys';
import EditBookings from '../../components/EditBookings/EditBookings';
import EditToys from '../UsersToy/UsersToy';


import Toys from '../ToysPage/ToysPage';

import './HomePage.css'

export default function Home () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state?.session?.user);
    const bookings = useSelector((state) => state?.bookings?.bookings)
    const [elementId, setElementId] = useState(null)

    const toys = useSelector((state) => state.toys)

    useEffect(() => {
        dispatch(getOneBooking(sessionUser?.id))
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})
    }, [dispatch, sessionUser]);

    let content = null;
    let element_content = null;

    if (elementId) {
        element_content = (
            <EditBookings
                bookId={elementId}
                booking={bookings}
                hideForm={() => setElementId(null)}
            />
        )
    }

    content = (
        <div className='home-body-container'>
            {/* <EditToys/> */}
            <div className='home-body'>
                <div className='bookings-container'>
                        {bookings?.map(book =>(
                            <>
                                <div className='booking-container'>
                                    The Toy<h2>{book?.Toy?.year} {book?.Toy?.make} {book?.Toy?.model} <br/> {book?.Toy?.type}</h2>
                                    Price<h3>$ {book?.Toy?.price} per day </h3>
                                    <div className='start-end'>
                                        <p>{moment(book?.startDate).format("MMMM Do YYYY, h:mm a")}</p>
                                        <p> {'>'}</p>
                                        <p>{moment(book?.endDate).format("MMMM Do YYYY, h:mm a")}</p>
                                    </div>
                                    <button className='edit-button' onClick={()=> setElementId(book?.id)}>edit booking</button>
                                </div>
                            </>
                        ))}
                </div>
            </div>
            <Toys/>
            {element_content}
        </div>
    )


    return (
        <>
            {sessionUser ? content : <SplashPage />}
        </>
    )
}
