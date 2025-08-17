import React, { useState } from 'react'
import left from '../media/left.png'
import right from '../media/right.png'
import burger from '../media/burger.jpg'
import pizza from '../media/pizza.jpg'
import delivery from '../media/delivery.jpg'

const Hero = () => {
    const images = [burger, pizza, delivery]
    const [index, setIndex] = useState(0)

    return (
        <div className="pt-20">

            {/* Hero container */}
            <div className="flex justify-center items-center">

                <div className="relative h-[450px] w-[1200px] flex items-center overflow-hidden rounded-lg shadow-lg">

                    {/* Left button */}
                    <button
                        onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                        className="absolute left-4 z-10 p-2 bg-white/70 rounded-full hover:bg-white transition cursor-pointer"
                    >
                        <img className="h-5 w-5" src={left} alt="Previous" />
                    </button>



                    {/* Hero image */}
                    <img
                        className="h-full w-full object-cover"
                        src={images[index]}
                        alt="Hero"
                    />



                    {/* Right button */}
                    <button
                        onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
                        className="absolute right-4 z-10 p-2 bg-white/70 rounded-full hover:bg-white transition cursor-pointer"
                    >
                        <img className="h-5 w-5" src={right} alt="Next" />
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Hero
