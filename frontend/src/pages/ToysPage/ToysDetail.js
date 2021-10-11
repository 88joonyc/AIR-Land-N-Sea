import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import { createBooking } from '../../store/bookings';
import * as reviewAction from '../../store/reviews';
import { getOneToy, oneToy } from '../../store/toys';
import { getUsers } from '../../store/users';
import LeaveReview from '../../components/LeaveReview/LeaveReview';
import EditUserToy from '../UsersToy/EditUsersToy';
import AddImages from '../ImagePage/ImagePage';

import './ToysDetail.css'

export default function Bookings () {
    const dispatch = useDispatch();
    const { toyId } = useParams()
    const bookings = useSelector((state) => state.bookings[toyId])
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews.reviews);
    const toy = useSelector((state) => state?.toys[toyId])
    // const reviews = toy?.Reviews


    // console.log('finally got the reviews',reviews2)

    // const users = useSelector((state) => Object.values(state.users))

    // const calStart = bookings?.startDate.split("T")[0]
    const calEnd = bookings?.endDate.split("T")[0]

    const history = useHistory();

    const [startDate, setStart] = useState(calEnd)
    const [endDate, setEnd] = useState('')
    const [average, setAverage] = useState('')
    const [averageRound, setAverageRound] = useState('')
    // const [isLoaded, setLoaded] = useState(true)
    const [hidden, setHidden] = useState(false)
    const [comment, toggleComment] = useState(false)
    const [editToy, toggleEdit] = useState(false)
    const [editComment, toggleEditComment] = useState(false)


    // console.log(sessionUser.id === toy.)
    // console.log(toy?.map(el => console.log(el)))

    // const [currentSlide, setCurrentSlide] = useState(0)
    const [slideNum, setSlideNum] = useState(0);

    useEffect(() => {
        // dispatch(getOneToy(toyId))
        dispatch(oneToy(toyId))
        dispatch(reviewAction.getReviews(toyId))
        dispatch(getUsers())
        window.scrollTo({top: 0, left: 0, behavior: 'auto'})

    }, [dispatch, toyId, reviewAction.getReviews]);

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
            const today = new Date()
            const bookedEnd = bookings.endDate;
            const bookdate = Date(bookedEnd)
            const start = Date(startDate)

            // if (startDate > endDate) return window.alert('That date is booked. Please try anothersds')
            if (startDate < endDate && startDate > today) {
                dispatch(createBooking(payload))
                window.alert('Booking has been made!')
                history.push('/')
            } else  return window.alert('That date is booked by another user. Please try anotherwsdeaw')
        } else {
            const today = new Date()
            // console.log(today)
            // console.log(startDate)
            // console.log(moment(today).format('YYYY-MM-DD'))
            if (startDate < endDate && startDate >= moment(today).format('YYYY-MM-DD')) {
            dispatch(createBooking(payload))
            window.alert('Booking has been successfully made. Enjoy!')
            history.push('/')
            } else {
                if (startDate < moment(today).format('YYYY-MM-DD')) {
                    window.alert('You must choose a valid start date. This is not back to the future!')
                }
                if (startDate > endDate) {
                    window.alert('You must choose valid dates. Your end date cannot come before your start!')
                }
                if (startDate < endDate && startDate > moment(today).format('YYYY-MM-DD') ) {
                    dispatch(createBooking(payload))
                    window.alert('Booking successful. Enjoy!')
                    history.push('/')
                }

            }
        }
    };

    function handleDelete(number) {
        // e.preventDefault();
        let confirmDelete = window.confirm("Are you sure you want to delete this review?")
        if(confirmDelete) {
            dispatch(reviewAction.deleteReview(number))
            dispatch(reviewAction.getReviews(toyId))
            window.alert("deleted!")
            // history.go(0)
        } else {
            window.alert("did not delete!")
        }
    }

    function handleEdit(e) {
        e.preventDefault();
        // history.push(`/toys/${toyId}`)
        // history.go(0)
    }

    if (editComment) {

    }

    let commentContent = null


    if (comment) {

        commentContent= (
            <>
                <LeaveReview hideForm={() => toggleComment(false)}/>
            </>
        )
    }

    function counter(arrow) {
        if (slideNum <= toy?.Images?.length - 1) {
            if (slideNum >= 0 && slideNum <= toy?.Images?.length - 2) {
                if (slideNum < 0) {
                    setSlideNum(toy?.Images?.length - 1)
                } else {
                    setSlideNum(Number(slideNum + arrow))
                }
            }
            if (slideNum === toy?.Images?.length - 1) {
                setSlideNum(0)
            } else if (slideNum < 0) {
                setSlideNum(toy?.Images?.length - 1 )
            }
            // console.log("=========wh2222at?===============", slideNum)
        }
        // console.log("=========wh2222at?===============", slideNum)
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

    let editToyContent = null

    if (editToy) {
        editToyContent = (
             <EditUserToy
                toyId={toyId}
                hideForm={() => toggleEdit(false)}
            />
        )
    } else {
        editToyContent = null
    }

    if (startDate && endDate) {
        document.querySelector(".reserve-button").disabled = false
    }

    return (
        <div className='toy-detail-container'>
            <div className='img-slide-container'>
                <div className='image-container'>
                    <img className='slide-image' src={toy?.Images[slideNum]?.url} />
                </div>
                <button className='slide-img-next' onClick={() => counter(1)} >{">"}</button>
                {/* <button className='slide-img-prev' onClick={() => counter(-1)} >{"<"}</button> */}
                {/* <button className='slide-img-next' onClick={() => console.log(toy[toyId].id)}></button> */}
            </div>
            <div className='details-page-container'>
                    <>
                        <div className='top-info-container'>

                            {/* <h2 className='toys-top-fn'>{toy?.User.firstName}'s</h2> */}
                            <h2 className='toys-top'>{toy?.make}</h2>
                            <h2 className='toys-top'>{toy?.model}</h2>
                            <h2 className='toys-top'>{toy?.year}</h2>
                        </div>


                        {/* <form
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
                            </form> */}


                        <div className='bot-info-container bottom-info'>
                            <div className="bs-info">
                                <div className='header'>
                                    <h3>Toy difficulty: {toy?.level}</h3>

                                </div>
                                <h3>Free Cancellation</h3>
                                <div className='header'>
                                    <h3>Gas: (Premium) </h3>

                                </div>
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
                                        className='side-info-text'
                                        >Start rental</label>
                                    <input
                                        type='date'
                                        value={startDate}
                                        onChange={(e) => setStart(e.target.value)}
                                        className='sidebar-input'
                                    />
                                    <label
                                    htmlFor='end'
                                    className='side-info-text'
                                    >End rental</label>
                                    <input
                                        type='date'
                                        value={endDate}
                                        onChange={(e) => setEnd(e.target.value)}
                                        className='sidebar-input'
                                    />
                                    <div className='booking-discount'>
                                    {(startDate - endDate < 3) ? <div className='discount-msg-contain'>
                                            <div className='discount-msg'> 3 + day discount </div>
                                            <div className='discount-msg-other'> US${Math.floor(toy?.level * .01 * toy?.price * 3)} </div>
                                        </div> : null}
                                        <button type='button' onClick={() => console.log(moment(startDate).format('Do'), endDate)}>yoyo</button>
                                        <div className='discount-msg-contain'>
                                            <div className='discount-msg'> Early bird discount</div>
                                            <div className='discount-msg-other'> US${Math.floor(toy?.level * .01 * toy?.price * 1/3)} </div>
                                        </div>
                                    </div>
                                    <div className='booking-additional'>
                                        <div className="sidebar-info">
                                            <h4>Full refund for the next 1 hour</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <div>Distance included:</div>
                                            <div>{2400 / toy?.level} mi</div>
                                            <div>${toy?.level * .09}/mi for additional miles driven</div>
                                        </div>
                                        <div className="sidebar-info">
                                            <p>Insurance and protection</p>
                                            <p>Insurance via Geico</p>
                                        </div>
                                    </div>
                                    { toy?.userId === sessionUser.id ? <button type='button' className='edit-toy-button' onClick={() => toggleEdit(!editToy)}>Edit your toy</button> : <button disabled={true} className='reserve-button' type='submit'>Reserve</button> }
                                </div>
                            </form>
                        </div>
                            <br />
                            <div className='bot-grid'>
                                <div className='bot-user-cont'>
                                    <img className='toys-user-img'src={toy?.User?.picture} />
                                    <div className='user-row-info'>
                                        <b className='toys-bot bot-info-text'>{toy?.User?.firstName} {toy?.User?.lastName}</b>
                                        <b className='bot-info-text'>🏆  All-star host</b>
                                        <b className='bot-info-text'>{reviews?.length} Trips • </b>
                                        {/* <b className='bot-info-text'> Joined {toy?.User?.lastName} </b> */}
                                        <b className='toys-bot bot-into-text'>username: {toy?.User?.username}</b>
                                        {/* <h2 className='toys-bot bot-into-text'>{toy?.User.createdAt}</h2> */}
                                    </div>
                                </div>
                            </div>
                            <div className='horizontal'>
                                <h4 className='prize'>🏆  </h4>
                                <p className='user-describe'>All-Star Hosts like {toy?.User?.firstName} are the top-rated and most experienced hosts on Air-land-n-sea.</p>
                            </div>
                                {/* <a href='/'>Learn more</a> */}

                            <div className='horizontal'>
                                <h4 className='prize'>🏆 </h4>
                                <p className='user-describe'>{toy?.User?.firstName} has completed the training on enhanced cleaning and disinfection practices. </p>
                            </div>
                                {/* <a href='/'>Learn more</a> */}

                            <div className='star-button'>
                                <button className="show-stars" onClick={starsRating}>Show rating </button> {Math.floor(average)}/5 <repeat n={`${Math.floor(average)}`}></repeat>
                            </div>

                            <h2 className='toy-title'>Features</h2>
                            <p className='toys-desc'>Must be 21+ to book</p>
                            <h2 className='toy-title'>Description</h2>
                            <div className='toy-title-cont'>
                                <h4 className='toys'>{toy?.year}</h4>
                                <h4 className='toys'>{toy?.make}</h4>
                                <h4 className='toys'>{toy?.model}</h4>
                            </div>
                            <p hidden={hidden} className='toys-desc'>{toy?.description}</p>
                            {/* <button type='button'  className={`button`} onClick={() => setHidden(false)} >see more</button> */}
                        </div>
                    </>

                    <div className='reviews-cont'>
                            <div className='review-title'>Ratings and reviews</div>

                            ( {reviews?.length} ratings total )
                            <button type='button' onClick={() => toggleComment(!comment)} className='leave-a-review'>Leave a review</button>
                            {

                            reviews?.map(review => {


                                if (review?.toyId == toyId) {
                                    return (
                                        <div className='review-container'>
                                            <div className='split'>
                                                <img className='reviewer-picture' src={`${review?.User.picture}`}/>

                                                <div className='splitter'>
                                                    <repeat n={`${review?.stars}`} />
                                                    <div className='grid-cont-small'>
                                                        <p>{review?.User.firstName}</p>
                                                        <p className='date-time'>{`${(Date(review?.createdAt)).split("GMT-")}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='review-box'>
                                                {review?.review}
                                                <>
                                                {/* {sessionUser.id === review.userId ? <button className='user-comment-buts' onClick={handleEdit}>edit</button> : null  } */}
                                                {sessionUser.id === review.userId ? <button className='user-comment-buts' onClick={() => handleDelete(review.id)}>delete</button> : null  }
                                                </>
                                            </p>
                                        </div>
                                    )
                                }

                            })}
                    </div>
            </div>
            {commentContent}
            {editToyContent}
        </div>
    )
}
