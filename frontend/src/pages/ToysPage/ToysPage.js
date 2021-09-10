import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';
import { getReviews1 } from '../../store/reviews';

// import ToysDetail from './ToysDetail'

import './ToysPage.css'

export default function Toys () {
    const dispatch = useDispatch();
    // const { toyId } = useParams();
    const toys = useSelector((state) => (Object.values(state.toys)))




    useEffect(() => {
        dispatch(getToys());
        // dispatch(getReviews1(1))

    }, [dispatch]);

    let starRate = {}

    return (
        <>
            <div className='toy-grid'>
                {toys.map(toy => {
                    if (toy.id) {

                    return (
                        <div className='toy-grouper-container'>
                            <Link className='link-cla' key={toy.id} to={`/toys/${toy.id}`}>
                                <div className='grouper'>
                                    <div className='toy-container'>
                                <img className='toys-page-image' src={toy?.Images[Math.floor(Math.random()*5)]?.url} />
                                        <div className='toy-info-container'>
                                            <h2 className='info-text'>{toy.make}</h2>
                                            <h2 className='info-text'>{toy.model}</h2>
                                            <h2 className='info-text'>{toy.year}</h2>
                                            <div className='toy-spec-info'>
                                                <b className='info-text into-same-text'>Difficulty Level</b>
                                                <b className='info-text'>{toy.level}</b>
                                            <b className='info-text into-same-text'>please drive to stay alive</b>
                                                <div className='toy-price-info'>
                                                    <b className='info-text into-same-text'>$</b>
                                                    <b className='info-text'>{toy.price}</b>
                                                    <b className='info-text into-same-text'>/ day</b>
                                                </div>
                                            </div>
                                            {/* {
                                                toy?.Reviews?.map(el => {
                                                console.log(toy.id)
                                                if (starRate[el.toyId] !== "undefined") {
                                                    starRate[el.toyId]= starRate[el.toyId] + el.stars
                                                }
                                                if (el.toyId === toy.id) {
                                                    starRate[el.toyId]=el.stars
                                                    console.log('this is tar',starRate)
                                                }
                                                // console.log('this is starrate',el)

                                            })} */}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                    } else return null
                })}
            </div>

        </>
    )
}
