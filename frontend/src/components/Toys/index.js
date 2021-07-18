import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';

export default function Toys () {

    const dispatch = useDispatch();
    const toys = useSelector((state) => Object.values(state.toys))

    useEffect(() => {
        dispatch(getToys());
    }, [dispatch]);

    return (
        <>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>hello</h2>
            <h2>{toys.id}</h2>
            <h2>{toys.description}</h2>
            <div>andf asdfb askdbaks</div>
        </>
    )
}
