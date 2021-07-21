import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createAlbum } from '../../store/images';

import './ImagePage.css'

export default function AddImages () {

    // const [toyId] = toyId
    const dispatch = useDispatch();
    const history = useHistory();

    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payLoad = {
            url
        }
        dispatch(createAlbum(payLoad))
    }

    return (
        <>
            <div className='img-container'>
                <form
                    className='image-form-container'
                    onSubmit={handleSubmit}
                >
                <img src={url}/>
                    <label>Add an image
                        <input
                            className='image-input'
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </label>
                    <button type="submit">Add picture</button>
                </form>
            </div>
        </>
    )
}
