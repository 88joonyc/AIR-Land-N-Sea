import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToys } from '../../store/toys';

import './ToysPage.css'

export default function Toys () {
    const dispatch = useDispatch();
    const toys = useSelector((state) => (state?.toys?.toys))

    useEffect(() => {
        dispatch(getToys());
    }, [dispatch]);

    let starRate = {}

    return (
        <div className='toy-grid-container'>
            <div className='toy-grid'>
                {toys?.map(toy => {
                    if (toy.id) {

                    return (
                        <Link className='link-cla' key={toy?.id} to={`/toys/${toy.id}`}>
                            <div className='grouper'>
                                <div className='toy-container'>
                                    <img className='toys-page-image' src={toy.Images.length > 4 ? toy?.Images[Math.floor(Math.random()*5)]?.url : toy?.Images[0]?.url}/>
                                    <div className='toy-info-container'>
                                        <div className='toy-main-info'>
                                            <h2 className='info-text'>{toy?.year}</h2>
                                            <h2 className='info-text'>{toy?.make}</h2>
                                            <h2 className='info-text'>{toy?.model}</h2>
                                        </div>
                                        <div className='toy-spec-info'>
                                            <div>
                                                <b className='info-text into-same-text'>Difficulty Level</b>
                                                <b className='info-text'>{toy?.level}</b>
                                            </div>
                                            <div className='toy-price-info'>
                                                <b className='info-text'>$</b>
                                                <b className='info-text'>{toy?.price}</b>
                                                <b className='info-text into-same-text'>/ day</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                    } else return null
                })}
            </div>


        </div>
    )
}
