import React, { useState } from 'react'
import menu from '../media/menu.png'
import cart from '../media/cart.png'
import cancel from '../media/cancel.png'
import search from '../media/search.png'
import offer from '../media/offer.png'
import order from '../media/order.png'
import walet from '../media/walet.png'
import help from '../media/help.png'
import favorite from '../media/favorite.png'
import refere from '../media/refere.png'
import profile from '../media/profile.png'


const Navbar = () => {
    const [work, setWork] = useState(false)
    const [here, setHere] = useState(false)

    return (
        <>
            {/* Full Navbar Control */}

            <div className='fixed top-0 left-0 flex justify-around h-20 w-full items-center text-center shadow-md sm:h-16 bg-white z-50'>



                {/* LOGO */}

                <div className='flex items-center text-center'>
                    <div className='cursor-pointer flex text-3xl pr-2 sm:text-5xl'>
                        <h1>Eat</h1>
                        <h1 className='font-bold'>Now</h1>
                    </div>

                    {/* Delivery option */}

                    <div className="hidden shadow-inner sm:flex justify-around items-center h-10 w-48  p-1 rounded-full">
                        <p onClick={() => setHere(false)} className={`cursor-pointer h-8 px-4 rounded-full flex justify-center items-center ${!here ? "bg-black text-white" : "text-black"}`}>
                            Delivery
                        </p>
                        <p onClick={() => setHere(true)} className={`cursor-pointer h-8 px-4 rounded-full flex justify-center items-center ${here ? "bg-black text-white" : "text-black"}`}>Pick Up</p>
                    </div>


                </div>


                {/* Search Box */}

                <div className='h-10 w-40 shadow-inner flex items-center p-3 rounded-full sm:w-80'>
                    <img className='cursor-pointer h-5 w-5' src={search} alt="search" />
                    <input className='outline-none p-2 w-full' type='text' placeholder='Search Foods' />
                </div>


                {/* Cart */}
                <div className='hidden h-8 w-20  rounded-full sm:flex justify-center items-center text-center shadow-inner'>
                    <img className='cursor-pointer h-5 w-5' src={cart} alt="cart" />
                </div>


                {/* Menu button */}
                <div onClick={() => setWork(!work)}>
                    <img className='cursor-pointer h-5 w-5' src={menu} alt="menu" />
                </div>

            </div>

            {/* Menu Slider: only render if work is true */}
            <div
                className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-20 transform transition-transform duration-300 ${work ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 ">
                    <h1 className="text-2xl">EatNow</h1>
                    <img
                        onClick={() => setWork(false)}
                        className="h-9 w-9 cursor-pointer"
                        src={cancel}
                        alt="cancel"
                    />
                </div>

                <nav>
                    <ul className="flex flex-col p-6 text-gray-800">
                        <li>
                            <div className="flex shadow-inner sm:hidden justify-around items-center h-8 w-50  p-1 rounded-full mb-8 mt-10">
                                <p onClick={() => setHere(false)} className={`cursor-pointer h-8 px-4 rounded-full flex justify-center items-center ${!here ? "bg-black text-white" : "text-black"}`}>
                                    Delivery
                                </p>
                                <p onClick={() => setHere(true)} className={`cursor-pointer h-8 px-4 rounded-full flex justify-center items-center ${here ? "bg-black text-white" : "text-black"}`}>Pick Up</p>
                            </div>
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[28px] w-7" src={profile} alt="profile" /> Profile
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[24px] w-6" src={order} alt="order" /> Orders
                        </li>
                        <li className="cursor-pointer text-[22px] flex gap-10 pl-4 pb-6">
                            <img className="h-[26px] w-6" src={favorite} alt="favorite" /> Favorite
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[27px] w-7" src={walet} alt="walet" /> Walet
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[28px] w-7" src={help} alt="help" /> Help
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[29px] w-7" src={offer} alt="offer" /> Offer
                        </li>
                        <li className="cursor-pointer text-[21px] flex gap-10 pl-4 pb-6">
                            <img className="h-[30px] w-7" src={refere} alt="refere" /> Refere
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar
