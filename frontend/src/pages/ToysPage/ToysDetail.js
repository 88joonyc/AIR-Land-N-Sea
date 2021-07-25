import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { createBooking } from '../../store/bookings';
import { getReviews } from '../../store/reviews';
import { getUsers } from '../../store/users';

import './ToysDetail.css'
import './ToysDetailImages.css'
import './ToysDetailReview.css'

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    const bookings = useSelector((state) => state.bookings[toyId])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => Object.values(state.reviews));
    const toy = useSelector((state) => state.toys[toyId])
    // const reviews = toy?.Reviews


    // console.log('finally got the reviews',reviews2)

    const users = useSelector((state) => Object.values(state.users))

    const calStart = bookings?.startDate.split("T")[0]
    const calEnd = bookings?.endDate.split("T")[0]

    const history = useHistory();

    const [startDate, setStart] = useState(calEnd)
    const [endDate, setEnd] = useState('')
    const [average, setAverage] = useState('')
    const [averageRound, setAverageRound] = useState('')

    // console.log(sessionUser.id === toy.)
    // console.log(toy?.map(el => console.log(el)))

    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideNum, setSlideNum] = useState(1);

    useEffect(() => {
        dispatch(getReviews(toyId))
        dispatch(getUsers())

    }, [dispatch, toyId]);

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

    let content = null



    const starAvg = []



    const starsRating = () => {
        let avg = 0

        reviews?.map((review, idx) => {
            avg += review.stars

            // console.log(avg)
            if (idx === reviews.length - 1) {
                setAverage(avg / reviews.length)
                setAverageRound(Math.floor(avg / reviews.length))
            }

        })
    }

    return (
        <>
            <div className='details-page-container'>
                <div className='image-wrapper'>
                        <img className='slide-image' src={toy?.Images[slideNum]?.url} />
                    <div className='img-slide-control'>
                        <button className='slide-img-next' onClick={() => counter()} >{">>"}</button>
                    </div>

                </div>
                    <>
                        <div className='top-info-container'>
                            <h2 className='toys-top'>{toy?.make}</h2>
                            <h2 className='toys-top'>{toy?.model}</h2>
                            <h2 className='toys-top'>{toy?.year}</h2>


                        </div>


                        <form
                                onSubmit={handleSubmit}
                                >
                                <div className='details-price-fo'>
                                    $ <div className="details-price-form">{toy?.price}</div> / day
                                </div>
                                <div className='date-area-grid'>
                                    <label
                                        htmlFor='start'
                                        >Start rental</label>
                                    <label htmlFor='end'>Check-in</label>
                                    <input
                                        type='date'
                                        value={startDate}
                                        onChange={(e) => setStart(e.target.value)}
                                    />
                                    <input
                                        type='time'
                                        value={endDate}
                                        className='form-booking-input'
                                        onChange={(e) => setEnd(e.target.value)}
                                    />
                                    <label
                                        htmlFor='end'
                                        >End rental</label>
                                    <label htmlFor='end'>Check-out</label>
                                    <input
                                        type='date'
                                        value={endDate}
                                        className='form-booking-input'
                                        onChange={(e) => setEnd(e.target.value)}
                                    />
                                        <input
                                            type='time'
                                            className='form-booking-input'
                                            value={startDate}
                                            onChange={(e) => setStart(e.target.value)}
                                        />
                                </div>
                                    <button className='reserve-button reserve-form' type='submit'>Reserve Now</button>
                            </form>


                        <div className='bot-info-container bottom-info'>
                            <div className="bs-info">
                                <h3>👍</h3>
                                <h3>Free Cancellation</h3>
                                <p></p>
                                <h4>Full refund for the next 1 hour</h4>
                            </div>
                            <div className="bs-info">
                                <h3>Insurance and protection</h3>
                                <p></p>
                                <h4>Insurance via Liberty Mutual ⭕️</h4>
                                ------
                            </div>
                            <br />
                            <div className='bot-grid'>
                                <img className='toys-user-img'src={toy?.User.picture} /> car
                                <h2 className='toys-bot bot-grid'>{toy?.User.firstName}</h2> car
                                Reach them by: <h2 className='toys-bot '>{toy?.User.username}</h2> car
                            </div>
                            Send a message: <p className='toys-descript'>{toy?.User.email}</p>
                            <div className='star-button'>
                                <button onClick={starsRating}>Stars </button> {Math.floor(average)}/5 <repeat n={`${Math.floor(average)}`}></repeat>
                            </div>

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
                            <div className='review-title'>Ratings and reviews</div>
                            {

                            reviews?.map(review => {


                                if (review.toyId == toyId) {
                                    return (
                                        <div className='review-container'>
                                            <h1>Stars: {`${review?.stars}`}</h1>
                                            <repeat n={`${review?.stars}`} ></repeat>

                                            <h1>Date: {`${review?.createdAt.split("T")}`}</h1>
                                            <h1>This was reviewed by: {`${review?.User.firstName}`}</h1>
                                            <h2>{review?.id}</h2>
                                            <p
                                                className='review-box'
                                            >{review?.review}</p>
                                            <button onClick={handleDelete} className='deleteButton'>delete</button>
                                            <h2
                                                className='stars'
                                            >user {review?.User.firstName} gave this a {review?.stars} star review!!</h2>
                                            <h2>{review?.userId}</h2>
                                        </div>
                                    )
                                }

                            })}
                    </div>
            </div>
        </>
    )
}
