import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getReviews } from '../../store/reviews';
import { getUsers } from '../../store/users';

import './ToysDetail.css'
import './ToysDetailImages.css'

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    const bookings = useSelector((state) => state.bookings[toyId])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews[toyId]);
    const toy = useSelector((state) => state.toys[toyId])
    // const reviews = toy?.Reviews


    console.log('finally got the reviews',reviews)

    const users = useSelector((state) => Object.values(state.users))

    const calStart = bookings?.startDate.split("T")[0]
    const calEnd = bookings?.endDate.split("T")[0]

    const history = useHistory();

    const [startDate, setStart] = useState(calEnd)
    const [endDate, setEnd] = useState('')

    // console.log(sessionUser.id === toy.)
    // console.log(toy?.map(el => console.log(el)))

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideNum, setSlideNum] = useState(1);

    useEffect(() => {
        dispatch(getReviews(toyId))
        dispatch(getUsers())

    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userId = sessionUser.id

        const payload = {
            toyId: Number(toyId),
            userId,
            startDate,
            endDate
        }

        //clean this upp!
        // const bookedStart = bookings[0].startDate;

        if (bookings) {
            const bookedEnd = bookings.endDate;
            const bookdate = Date(bookedEnd)
            const start = Date(startDate)

            // if (startDate > endDate) return window.alert('That date is booked. Please try anothersds')
            if (startDate < endDate ) {
                dispatch(createBooking(payload))
                window.alert('Booking has been made!')
                history.go(0)
            } else  return window.alert('That date is booked by another user. Please try anotherwsdeaw')
        } else {
            dispatch(createBooking(payload))
            window.alert('Booking has been successfully made. Enjoy!')
            history.go(0)
        }
    };

    function handleDelete(e) {
        e.preventDefault();
        // console.log('rthis is the targert',e)
    }

    function counter() {
        let counter = slideNum;
        console.log(counter)

        if (counter < toy?.Images.length - 1) {
            counter = slideNum + 1
            setSlideNum(Number(counter))
        } else {
            setSlideNum(0)
        }
    }

    const starsRating = () => {
        const arr =[]
        reviews?.map(review => {

            // console.log('this is what i get for review', review)
            // review.stars?.map(el=> console.log('this is el', el))
            // console.log('this is'. review)

            // console.log(review)
            // const average = review?.stars.map(el => console.log('this are numbers ',el))

            // console.log('wjat is theis acverafge', average)
        })
    }

    return (
        <>
            <div className='details-page-container'>
                <div className='image-wrapper'>
                        <img className='slide-image' src={toy?.Images[slideNum]?.url} />
                        <button onClick={() => counter()} >hitme</button>
                    <div className='img-slides-col'>
                    </div>

                </div>
                    <>
                        <div className='top-info-container'>
                            <h2 className='toys-top'>{toy?.year}</h2>
                            <h2 className='toys-top'>{toy?.make}</h2>
                            <h2 className='toys-top'>{toy?.model}</h2>
                            <h2 className='toys-top'>{toy?.id}</h2>
                            <button onClick={starsRating}>stars rating</button>
                        </div>
                        <div className='bot-info-container bottom-info'>
                            <h1>Hosted by</h1>
                            <br />
                            <div className='bot-grid'>
                                <img className='toys-user-img'src={toy?.User.picture} /> car
                                <h2 className='toys-bot bot-grid'>{toy?.User.firstName}</h2> car
                                Reach them by: <h2 className='toys-bot '>{toy?.User.username}</h2> car
                            </div>
                            Send a message: <p className='toys-descript'>{toy?.User.email}</p>


                            <h2 className='toy-title'>Description of the car:</h2>
                            <p className='toys-desc'>{toy?.description}</p>
                            <h2 className='toys'>{toy?.year}</h2>
                            <h2 className='toys'>{toy?.make}</h2>
                            <h2 className='toys'>{toy?.model}</h2>
                            <h2 className='toys'>{toy?.id}</h2>
                        </div>
                        <div className='booking-form'>
                            <form
                                onSubmit={handleSubmit}
                                >
                                <div className='details-price'>
                                    $ <div>{toy?.price}</div> / day
                                </div>
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
                    </>

                    <div className='reviews-cont'>
                            {reviews?.map(review => {
                                if (true ) {
                                    return (
                                        <div className='review-container'>
                                            <h1>Reviewd by {`${review?.id}`}</h1>
                                            <h2>{review?.id}</h2>
                                            <p
                                                className='review-box'
                                            >{review?.review}</p>
                                            <button onClick={handleDelete} className='deleteButton'>delete</button>
                                            <h2
                                                className='stars'
                                            >user {review?.userId} gave this a {review?.stars} star review!!</h2>
                                            <h2>{review?.userId}</h2>
                                        </div>
                                    )

                                } else return null
                    })}
                    </div>
            </div>
        </>
    )
}
