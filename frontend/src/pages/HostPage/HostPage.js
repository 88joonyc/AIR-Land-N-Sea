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

    const date = new Date()
    // console.log(date.getFullYear())
    const thisYear = date.getFullYear()


    // (function(){
    //     const e = document.getElementById('year-element')
    //     const frag = document.createDocumentFragment();
    //     for (let i = 1970; i <= thisYear; i++) {
    //         const option = document.createElement('option')
    //         option.value=i
    //         // option.appendChild()
    //     }
    // })


    return (
        <div className='hosts-background'>
            <div className='hosts-container'>
                <h1 className='host-heading'>List your toy</h1>
                <div className='host-form-container'>
                    <form onSubmit={handleSubmit} className='host-form'>
                        <label className='hosts-label' >What year is your toy?
                        </label>
                            <input
                                type='number'
                                placeholder='Year of toy'
                                required
                                value={year}
                                min={1920}
                                max={thisYear}
                                className="host-input"
                                onChange={(e) => setYear(e.target.value)}
                            />
                            {/* <select id='year-element' className='host-input'>
                                <option value=''>-select-</option>
                                {}

                            </select> */}
                        <label className='hosts-label' >Make
                            <input
                                type='text'
                                placeholder='Make of toy'
                                required
                                value={make}
                                maxLength={100}
                                className="host-input"
                                onChange={(e) => setMake(e.target.value)}
                            />
                        </label>
                        <label className='hosts-label' >Model
                            <input
                                type='text'
                                placeholder='Model of toy'
                                required
                                value={model}
                                maxLength={100}
                                className="host-input"
                                onChange={(e) => setModel(e.target.value)}
                            />
                        </label>
                        <label className='hosts-label' >Type
                            </label>
                            {/* <input
                                type='text'
                                placeholder='Input the type of toy'
                                required
                                value={type}
                                className="host-input"
                                maxLength={100}
                                onChange={(e) => setType(e.target.value)}
                            /> */}
                            <select className='host-input' onChange={(e) => setType(e.target.value)}>
                                <option value=''>- select -</option>
                                <option value='Car'>- Car -</option>
                                <option value='Plane'>- Plane -</option>
                                <option value='Vintage'>- Vintage -</option>
                                <option value='Motorcycle'>- Motorcycle -</option>
                                <option value='Rocket'>- Rocket -</option>
                                <option value='Quad/ATV'>- Quad/ATV -</option>
                                <option value='Boat'>- Boat -</option>
                                <option value='Man-suit'>- Man-Suit -</option>
                                <option value='Magic carpet'>- Magic Carpet -</option>
                                <option value='Other'>- Other -</option>
                            </select>
                        <label className='hosts-label' >Level of difficulty
                            {/* <input
                                type='number'
                                placeholder='level of difficulty ranging from 1 to 5'
                                required
                                min="1"
                                max='5'
                                value={level}
                                className="host-input"
                                onChange={(e) => setLevel(e.target.value)}
                            /> */}
                            <select className='host-input' onChange={(e) => setLevel(e.target.value)}>
                                <option value=''>- select -</option>
                                <option value={1}>- level 1 Newb -</option>
                                <option value={2}>- level 2 Amateur -</option>
                                <option value={3}>- level 3 Intermedite -</option>
                                <option value={4}>- level 4 Pro -</option>
                                <option value={5}>- level 5 Jeff Bezos -</option>
                            </select>
                        </label>
                        <label className='hosts-label' >Price
                            <input
                                type='number'
                                placeholder='Price'
                                required
                                value={price}
                                className="host-input"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <label className='hosts-label'>Description
                            <textarea
                                className='host-texarea'
                                placeholder='Write the description of your toy here'
                                required
                                value={description}
                                maxLength={5000}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </label>
                        <button className='host-submit' type='submit'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
