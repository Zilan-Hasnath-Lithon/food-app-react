import React from 'react'

import breakfast from '../media/breakfast.jpg'
import lunch from '../media/lunch.jpg'
import dinner from '../media/dinner.jpg'
import dessert from '../media/dessert.jpg'


const Categoty = () => {
    return (
        <>
            {/* Food Category Section */}

            <div className="pt-25 pb-20 w-full flex gap-10 flex-wrap justify-center lg:col-span-3">

                <span className="rounded-2xl h-[250px] w-[270px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img className="h-full w-full object-cover opacity-60" src={breakfast} alt="Breakfast" />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5">
                        <p className="text-4xl font-bold text-white">Find the best breakfast</p>
                        <button className="cursor-pointer w-30 h-10 bg-amber-400 font-bold text-black mt-2 rounded-2xl">Order Now</button>
                    </div>
                </span>

                <span className="rounded-2xl h-[250px] w-[270px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img className="h-full w-full object-cover opacity-60" src={lunch} alt="Lunch" />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5">
                        <p className="text-4xl font-bold text-white">Find the best lunch</p>
                        <button className="cursor-pointer w-30 h-10 bg-amber-400 font-bold text-black mt-2 rounded-2xl">Order Now</button>
                    </div>
                </span>

                <span className="rounded-2xl h-[250px] w-[270px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img className="h-full w-full object-cover opacity-60" src={dinner} alt="Dinner" />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5">
                        <p className="text-4xl font-bold text-white">Find the best dinner</p>
                        <button className="cursor-pointer w-30 h-10 bg-amber-400 font-bold text-black mt-2 rounded-2xl">Order Now</button>
                    </div>
                </span>

                <span className="rounded-2xl h-[250px] w-[270px] relative overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img className="h-full w-full object-cover opacity-60" src={dessert} alt="Dessert" />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-5">
                        <p className="text-4xl font-bold text-white">Find the best dessert</p>
                        <button className="cursor-pointer w-30 h-10 bg-amber-400 font-bold text-black mt-2 rounded-2xl">Order Now</button>
                    </div>
                </span>

            </div>







        </>
    )
}

export default Categoty