import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createToy } from '../../store/toys';

import './HostPage.css'

export default function Hosting () {

    const dispatch = useDispatch();
    const history = useHistory()

    const sessionUser = useSelector(state => state.session.user);

    const [year, setYear] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [level, setLevel] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

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


        let createdToy = await dispatch(createToy(payload))

        if (createdToy) {
            history.push(`/images/${createdToy.toy.id}`)
        }

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
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </label>
                        <label>Make
                            <input
                                type='text'
                                placeholder='Make of toy'
                                required
                                value={make}
                                className="host-input"
                                onChange={(e) => setMake(e.target.value)}
                            />
                        </label>
                        <label>Model
                            <input
                                type='text'
                                placeholder='Model of toy'
                                required
                                value={model}
                                className="host-input"
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </label>
                        <label>Type
                            <input
                                type='text'
                                placeholder='Input the type of toy'
                                required
                                value={type}
                                className="host-input"
                                onChange={(e) => setType(e.target.value)}
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
                                onChange={(e) => setLevel(e.target.value)}
                            />
                        </label>
                        <label>Price
                            <input
                                type='number'
                                placeholder='Price'
                                required
                                value={price}
                                className="host-input"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <label>Description
                            <textarea
                                className='host-texarea'
                                placeholder='Place your description here'
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </label>
                        <button className='host-submit' type='submit'>Add pictures</button>
                    </form>
                </div>
            </div>
        </>
    )
}
