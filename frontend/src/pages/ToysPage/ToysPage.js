import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';

// import ToysDetail from './ToysDetail'

import './ToysPage.css'

export default function Toys () {
    const dispatch = useDispatch();
    // const { toyId } = useParams();
    const toys = useSelector((state) => (Object.values(state.toys)))


    useEffect(() => {
        dispatch(getToys());

    }, [dispatch]);

    return (
        <>
            <div className='toy-grid'>
                {toys.map(toy => {
                    if (toy.id) {
                    return (
                        <Link key={toy.id} to={`/toys/${toy.id}`}>
                            <div className='grouper'>
                                <div className='toy-container'>
                                    <h3>{toy.year}</h3>
                                    <h4>{toy.make}</h4>
                                    <h4>{toy.model}</h4>
                                </div>
                            </div>
                        </Link>
                    )
                    } else return null
                })}
            </div>

        </>
    )
}
