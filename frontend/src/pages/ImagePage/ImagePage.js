import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createAlbum } from '../../store/images';

import './ImagePage.css'

export default function AddImages () {

    const dispatch = useDispatch();
    const history = useHistory();
    let {toyId} = useParams()

    const [url, setUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payLoad = {
            toyId,
            url
        }

        let createdAlbum = dispatch(createAlbum(payLoad))

        if (createdAlbum) {
            window.alert("image has been added!")
        }
    }

    const handleBack = () => {
        history.push('/')
    }

    return (
        <>
            <div className='img-container'>
                <form
                    className='image-form-container'
                    onSubmit={handleSubmit}
                    >
                <img src={url}/>
                    <button type="submit" className='add-picture' >Add an image</button>
                        <input
                            className='image-input'
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder={'URL ADDRESS'}
                        />
                    <button className='cancel-picture' onClick={handleBack} type="button">Add picture</button>
                </form>
            </div>
        </>
    )
}
