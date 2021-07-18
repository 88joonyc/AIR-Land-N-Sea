import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../store/toys';

export default function Toys () {

    const dispatch = useDispatch();
    const toys = useSelector((state) => Object.values(state.toys))

    console.log(toys)

    useEffect(() => {
        dispatch(getToys());
    }, [dispatch]);

    return (
        <>
            {toys.map(toy => {
                return (
                    <>
                        <h3>{toy.year}</h3>
                        <h4>{toy.make}</h4>
                        <h4>{toy.model}</h4>
                    </>
                )
            })}
        </>
    )
}
