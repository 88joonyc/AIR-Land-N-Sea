import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createAlbum, getImages } from '../../store/images';
import { getOneToy } from '../../store/toys';

import './ImagePage.css'

export default function AddImages ({hideForm}) {

    const dispatch = useDispatch();
    const history = useHistory();
    let {toyId} = useParams()

    const toy = useSelector((state) => state.toys[toyId])
    const sessionUser = useSelector(state => state?.session?.user)
    const imagesss = useSelector(state => state.images)

    const [url, setUrl] = useState('')
    const [pic, showPic] = useState(false)
    const [image, setImage] = useState('')

    useEffect(() => {
        dispatch(getImages(Number(toyId)))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payLoad = {
            toyId,
            url
        }

        let createdAlbum = null

        if (url) {
            createdAlbum = dispatch(createAlbum(payLoad))
            dispatch(getOneToy(sessionUser?.id))
            if (createdAlbum) {
                window.alert("image has been added!")
            } else {
                window.alert("did you mean to add an image?")
            }
        }

    }

    let content = null

    const handleBack = () => {
        history.push('/')
    }

    if (pic && image) {
        content = (
            <div className='single-image'>
                <div className="image-button-carrier">
                    <button className='image-buttn' onClick={() => (showPic(!pic), setImage(''))}>
                        <img className='the-button-image' src={image} />
                    </button>
                </div>
            </div>
        )
    } else {
        content = (
            <>
                <div className='img-container'>
                    <div className='image-form-contain'>
                        <div className='image-page-images'>
                            <div className='image-placement'>
                                {toy?.Images?.map(toys => (
                                    <button className='image-button' onClick={() => (showPic(!pic), setImage(toys?.url))} type='button'>
                                        <img  className="image-page-image" src={toys.url}/>
                                    </button>
                                ))}
                            </div>

                        </div>
                        <form
                            className='image-form-container'
                            onSubmit={handleSubmit}
                            >
                        <img className='img-pupup' src={url}/>
                            <button type="submit" className='add-picture' >Add an image</button>
                                <input
                                    className='image-input'
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder={'URL ADDRESS'}
                                />
                            {/* <button className='cancel-picture' onClick={handleBack} type="button">cancel</button> */}
                            <button className='cancel-picture' onClick={() => hideForm()} type="button">back</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}
