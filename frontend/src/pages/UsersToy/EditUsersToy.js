import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {updateToy } from '../../store/toys';


import './EditUsersToy.css'


export default function EditUserToy({toyId, hideForm}) {

    const dispatch = useDispatch();
    const history = useHistory()
    const toy = useSelector((state) => state.toys[toyId])
    const sessionUser = useSelector(state => state.session.user);


    const [year, setYear] = useState(toy.year)
    const [make, setMake] = useState(toy.make)
    const [model, setModel] = useState(toy.model)
    const [type, setType] = useState(toy.type)
    const [level, setLevel] = useState(toy.level)
    const [price, setPrice] = useState(toy.price)
    const [description, setDescription] = useState(toy.description)

    const updateYear = (e) => setYear(e.target.value)
    const updateMake = (e) => setMake(e.target.value)
    const updateModel = (e) => setModel(e.target.value)
    const updateType = (e) => setType(e.target.value)
    const updateLevel = (e) => setLevel(e.target.value)
    const updatePrice = (e) => setPrice(e.target.value)
    const updateDescription = (e) => setDescription(e.target.value)


    let updatedToy;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = sessionUser.id

        const payload = {
            userId,
            description,
            year,
            make,
            model,
            type,
            level,
            price
        };

        console.log('this toy id isnt going througj', toyId)

        updatedToy = await dispatch(updateToy(payload, toyId))

        if (updatedToy) {
            window.alert('updated!!')
            // history.push(`/images/${updatedToy.toy.id}`)
            history.push(`/`)
            history.go(0)
        }

    }

    // useEffect(() => {
    //     dispatch(createToy(payload))
    // }, [dispatch])

    function handleCancel(e) {
        e.preventDefault();
        hideForm();
    }

    return (
        <>
            <div className='hosts-container'>
                <div className='host-form-container'>
                    <form onSubmit={handleSubmit} className='host-form'>
                        <label>Year
                            <input
                                type='number'
                                placeholder='Year of toy'
                                required
                                value={year}
                                className="host-input"
                                onChange={updateYear}
                            />
                        </label>
                        <label>Make
                            <input
                                type='text'
                                placeholder='Make of toy'
                                required
                                value={make}
                                className="host-input"
                                onChange={updateMake}
                            />
                        </label>
                        <label>Model
                            <input
                                type='text'
                                placeholder='Model of toy'
                                required
                                value={model}
                                className="host-input"
                                onChange={updateModel}
                            />
                        </label>
                        <label>Type
                            <input
                                type='text'
                                placeholder='Input the type of toy'
                                required
                                value={type}
                                className="host-input"
                                onChange={updateType}
                            />
                        </label>
                        <label>Level of difficulty
                            <input
                                type='number'
                                placeholder='level of difficulty ranging from 1 to 5'
                                required
                                min="1"
                                max='5'
                                value={level}
                                className="host-input"
                                onChange={updateLevel}
                            />
                        </label>
                        <label>Price
                            <input
                                type='number'
                                placeholder='Price'
                                required
                                value={price}
                                className="host-input"
                                onChange={updatePrice}
                            />
                        </label>
                        <label>Description
                            <textarea
                                className='host-texarea'
                                placeholder='Place your description here'
                                required
                                value={description}
                                onChange={updateDescription}
                            ></textarea>
                        </label>
                        <button className='host-submit' type='submit'>Next</button>
                        <button className='' onClick={handleCancel} type='button'>cancel</button>
                    </form>
                </div>

            </div>
        </>
    )
}
