import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { createReview, getReviews } from '../../store/reviews';

import './LeaveReview.css'

export default function LeaveReview({hideForm}) {
    const dispatch = useDispatch();
    const {toyId} = useParams()
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState('')
    const [stars, setStars] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            userId: sessionUser.id,
            toyId: toyId,
            review: review,
            stars: stars,
        }

        if (review) {
            await dispatch(createReview(payload))
            dispatch(getReviews(toyId))
            window.alert("review submitted!")
        }

    };

    return (
        <div className='review-container-body'>
            <div className="leave-review-container">
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    >
                        <div className='leave-review-box'>
                            <div className='stars-input'>
                                <label>stars</label>
                                <input type='number'
                                required={true}
                                min="1"
                                max="5"
                                onChange={(e) => setStars(e.target.value)}/>
                            </div>
                            <label>Review</label>
                            <textarea
                                className='review-text'
                                placeholder='Write your review here; please be descriptive!'
                                maxLength={2000}
                                minLength={2}
                                onChange={(e) => setReview(e.target.value)}
                                required={true}
                            />
                        </div>
                        <button className='submit-comment' type='submit'>Leave review</button>
                        <button className='comment-form-cancel' type='button' onClick={() => hideForm()}>X</button>
                        {/* <button type='button' onClick={() => console.log(toyId.toyId)}>click</button> */}
                </form>
            </div>
        </div>
    )
}
