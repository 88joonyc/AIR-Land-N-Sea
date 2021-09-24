import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToys } from '../../store/toys';

import './SplashPage.css'


export default function SplashPage () {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state?.session)
    const toys = useSelector((state) => state.toys.toys)


    function openEditBooking(e) {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getToys())
    }, [dispatch]);

    return (
        <div className='spash-container'>
                <div className='splash-first'>
                    <div className='splash-find-toy'>
                        <div className='splash-text-container'>
                            <h1 className='splash-find-print'>Find your new fast toy on Air Land-N-Sea!</h1>
                            <p className='splash-find-print'>Explore the skies or go sailing in the blue sea~ Find your next adventure with us!</p>
                            <label className="splash-find-text" htmlFor='location'>LOCATION</label>
                            <input
                                name='location'
                                className='splash-find-inputext'
                                type='text'
                            />
                            <div className='splash-find-date'>
                                <div>
                                    <label className="splash-find-text" htmlFor='location'>CHECK IN</label>
                                    <input
                                        name='location'
                                        className='splash-find-text'
                                        type='date'
                                    />
                                </div>
                                <div>
                                    <label className="splash-find-text" htmlFor='location'>CHECK OUT</label>
                                    <input
                                        name='location'
                                        className='splash-find-text'
                                        type='date'
                                    />
                                </div>
                            </div>
                            <div className='splash-find-drop'>
                                <select className="splash-find-select">
                                    <option>- select -</option>
                                </select>
                                <select className="splash-find-select">
                                    <option>- select -</option>
                                </select>
                            </div>
                                <a href='login' className='search-button'> 🔍 Search</a>
                        </div>
                    </div>
                    <img className='splash-opening-img'/>
                </div>
                <div className='try-hosting-null'>
                    <img className='splash-second-img'/>
                    <div className='splash-second-message'>
                        <h1 className='splash-second-text'>Try hosting</h1>
                        <p className='splash-para'>Earn up to $2,505/month by sharing your Toy</p>
                        <button className='learn-more-button'>Learn more</button>
                    </div>
                    <h1 className='worlds-largest'>The world's largest car <br/> sharing marketplace<div className='worlds-block'></div></h1>
                </div>
                <div className='try-hosting-second'>
                    <img className='white-car'/>
                    <div className='white-car-message'>
                        <h3>Conquer the road with the perfect toy to speed around in</h3>
                        <p>From daily sports cars to jets and speed boats, ditch the mundane to discover new heights and experience what you've never thought possible——this is where dreams come true!</p>
                    </div>
                </div>
                    <h2 className='worlds-hosts'>Browse pictures<div className='hosts-block'></div></h2>
                <div className='meet-the-hosts'>
                    <div className='hosts-box'>
                        {toys?.map((toy, idx) => (
                            <div className='slider'>
                                {/* <h1>{toy.id}</h1> */}
                                {idx < 7 ? <img className='sidescroll-image' src={toy.Images[0].url}/> : null}
                                {/* {idx < 5 ? <p>{toy?.Reviews[0]?.review}</p> : null} */}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='meet-the-review'>
                    <h2 className='worlds-hosts-host'>Meet the hosts<div className='hosts-block'></div></h2>
                    <div className='hosts-box-review'>
                        {toys?.map((toy, idx) => (
                            <div className='splash-review-cont'>
                                <>
                                {idx < 4 ? <img className='splash-host-img' src={toy?.User.picture} /> : null}
                                {idx < 4 ? <p className='splash-review'>{toy?.Reviews[0]?.review}</p> : null}
                                {/* <img className='sidescroll-image' src={toy.Images[0].url}/> */}
                                </>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='meet-the-review'>
                    <h2 className='worlds-hosts-freq'>Frequently asked questions<div className='hosts-block'></div></h2>
                    <div className='hosts-box-freq'>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-1").hidden=false} className='freq-button'>Why do I need to book a car on Air Land-N-Sea? </button>
                            <div className='freq-1 freq-ques' hidden={true}>To book a car on Air Land-N-Sea, you must create a Air Land-N-Sea account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Air Land-N-Sea. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for every future road trip, business trip, and family vacation!</div>
                        </div>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-2").hidden=false} className='freq-button' className='freq-button'>What happens if I have an accident?</button>
                            <div className='freq-2 freq-ques' hidden={true}>If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.</div>
                        </div>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-3").hidden=false} className='freq-button' className='freq-button'>Do I need my own insurance?</button>
                            <div className='freq-3 freq-ques' hidden={true}>No, you don’t need personal insurance coverage to book a car on Air Land-N-Sea. <br/><br/> In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Air Land-N-Sea protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Air Land-N-Sea by Liberty Surplus Insurance Corporation, a member of the Liberty Mutual Group — $750,000 for the Premier plan.* <br/><br/> When booking a car in Canada, you’ll choose between three protection plans — Premier, Standard, or Minimum — and with each plan, you’re covered with liability insurance purchased from Intact Financial Corporation in Alberta, Nova Scotia, Ontario, and Quebec, and Insurance Corporation of British Columbia (ICBC) in British Columbia — up to $2,000,000 for all plans.** <br/>When booking a car in the United Kingdom, you’ll also choose between the Premier, Standard, and Minimum protection plans. Each plan includes different limits of financial responsibility for physical damage, but all three plans include up to £20,000,000 coverage under a third-party automobile liability insurance policy provided by Aioi Nissay Dowa Insurance UK Ltd. via Air Land-N-Sea broker Aon UK Ltd.**</div>
                        </div>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-4").hidden=false} className='freq-button' className='freq-button'>Can I get my car delivered to me?</button>
                            <div className='freq-4 freq-ques' hidden={true}>Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Air Land-N-Sea near hundreds of airports, or you can have your car delivered for pickup and return at your hotel or vacation rental to save time and hassle. Some hosts offer free delivery, while others set their own delivery fee.</div>
                        </div>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-5").hidden=false} className='freq-button' className='freq-button'>Can other people drive the car I booked?</button>
                            <div className='freq-5 freq-ques' hidden={true}>Yes, multiple guests can drive the car you book on Air Land-N-Sea, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Air Land-N-Sea hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress. <br/><br/> To speed up the process, have your additional driver create a Air Land-N-Sea account and get approved to drive before you request to add them. All drivers must have a valid driver’s license and meet the age requirements for the car you’ve booked. You can request to add drivers via the “Trips” tab in the Air Land-N-Sea app without additional driver charges or extra costs.</div>
                        </div>
                        <div className='freq-buttons'>
                            <button onClick={() => document.querySelector(".freq-6").hidden=false} className='freq-button' className='freq-button'>How do I get discounts when booking a car?</button>
                            <div className='freq-6 freq-ques' hidden={true}>Many Air Land-N-Sea hosts offer discounted prices for weekly and monthly trips, as well as “early bird” discounts for trips booked a week or more in advance. Get the best deals and lowest rates possible by booking longer trips, at least a week in advance. Commercial Hosts may also offer weekly car rental and monthly car rental deals.* <br/><br/> On your Account page, make sure you’ve checked the box to receive email notifications, and enable push notifications from the Air Land-N-Sea app in your phone settings — we’ll send you occasional promo codes, discounts, and deals!</div>
                        </div>
                        <div className='freq-buttons freq-buttons-bot'>
                            <button onClick={() => document.querySelector(".freq-7").hidden=false} className='freq-button' className='freq-button'>What is the cancellation policy on Air Land-N-Sea?</button>
                            <div className='freq-7 freq-ques' hidden={true}>You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee. <br/><br/> In the rare event a host cancels, you’ll be notified immediately so you can book another car, or we’ll help you find one. Your refund can be temporarily held to expedite rebooking, or the funds can be returned to your bank account — your choice.</div>
                        </div>
                        <div className='freq-buttons freq-buttons-bot'>
                            <button onClick={() => document.querySelector(".freq-8").hidden=false} className='freq-button' className='freq-button'>What are the cleaning and safety policies on Air Land-N-Sea?</button>
                            <div className='freq-8 freq-ques' hidden={true}>Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Air Land-N-Sea hosts have access to training materials on enhanced cleaning practices to help prevent the spread of COVID-19 or other viruses.</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
