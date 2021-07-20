import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToys } from '../../store/toys';

// import ToysDetail from './ToysDetail'

// import './ToysPage.css'

export default function EditToys () {
    const dispatch = useDispatch();
    // const { toyId } = useParams();
    const toys = useSelector((state) => (Object.values(state.toys)))


    useEffect(() => {
        dispatch(getToys());

    }, [dispatch]);

    return (
        <>


        </>
    )
}
