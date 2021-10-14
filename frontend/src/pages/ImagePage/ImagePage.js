import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createAlbum, deleteImage, getImages } from '../../store/images';
import { getOneToy } from '../../store/toys';

import './ImagePage.css'

export default function AddImages ({hideForm}) {

    const dispatch = useDispatch();
    const history = useHistory();
    let {toyId} = useParams()

    // const toy = useSelector((state) => state.toys[toyId])
    const sessionUser = useSelector(state => state?.session?.user)
    const images = useSelector(state => state?.images?.images)

    const [url, setUrl] = useState('')
    const [pic, showPic] = useState(false)
    const [image, setImage] = useState('')
    const [imageS3, setS3] = useState(null)
    const [id, setId] = useState('')

    useEffect(() => {
        dispatch(getImages(Number(toyId)))
    }, [toyId])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payLoad = {
            toyId,
            imageS3
        }

        let createdAlbum = null

        if (imageS3) {
            console.log(imageS3)
            createdAlbum = await dispatch(createAlbum(payLoad))
            dispatch(getImages(Number(toyId)))
            if (createdAlbum) {
                window.alert("image has been added!")
            } else {
                window.alert("did you mean to add an image?")
            }
        }

    }

    let content = null


    // const handleBack = () => {
    //     history.push('/')
    // }

    const deletePic = async () => {

        const confirm = window.confirm("Are you sure you want to delete this picture?")
        if (confirm)  {
            await dispatch(deleteImage(id))
            dispatch(getImages(Number(toyId)))
            showPic(!pic)
            setImage('')
        }
    }

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setS3(file)
    }

    if (pic && image) {
        content = (
            <div className='single-image'>
                <div className="image-button-carrier">
                    <button className='image-buttn' onClick={() => (showPic(!pic), setImage(''))}>
                        <img className='the-button-image' src={image} />
                    </button>
                    <button className="delete-pic" onClick={() => deletePic()}>Delete this picture</button>
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
                                {images?.map(toys => (
                                    <button className='image-button' onClick={() => (showPic(!pic), setImage(toys?.url), setId(toys?.id))} type='button'>
                                        <img  className="image-page-image" src={toys.url}/>
                                    </button>
                                ))}
                            </div>

                        </div>
                        <form
                            className='image-form-container'
                            onSubmit={handleSubmit}
                            >
                        {/* <img className='img-pupup' src={url}/> */}
                            <button type="submit" className='add-picture' >Add an image</button>
                                <input
                                    className='image-input'
                                    onChange={updateFile}
                                    // placeholder={'URL ADDRESS'}
                                    type='file'
                                />
                            {hideForm ? <button className='cancel-picture' onClick={() => hideForm()} type="button">back</button> : <button className='cancel-picture' onClick={history.push('/')}>home</button>}
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
