import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import './LeaveReview.css'

export default function LeaveReview() {
    const dispatch = useDispatch();
    const toyId = useParams()
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


    };

    return (
        <div className='review-container-body'>
            <div className="leave-review-container">
                <form
                    onSubmit={() => handleSubmit()}
                    >
                        <div className='leave-review-box'>
                            <label>stars</label>
                            <input type='number' onChange={(e) => setStars(e.target.value)}/>
                            <label>Review</label>
                            <textarea
                                className='review-text'
                                placeholder='Write your review here; please be descriptive!'
                                maxLength={2000}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                        <button className='submit-comment' type='submit'>Leave review</button>

                </form>
            </div>
        </div>
    )
}
