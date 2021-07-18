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
                return (<h2>{toy.id}</h2>)
            })}
        </>
    )
}
