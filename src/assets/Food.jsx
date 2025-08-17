import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
    const [foods, setFoods] = useState(data);

    // Filter by type
    const filterType = (category) => {
        setFoods(data.filter((item) => item.category === category));
    };

    // Filter by price
    const filterPrice = (price) => {
        setFoods(data.filter((item) => item.price === price));
    };

    // Reset to show all foods
    const showAll = () => {
        setFoods(data);
    };

    return (
        <>
            <div className='h-10 w-full justify-center text-center'>
                <h1 className='font-extrabold text-2xl text-orange-600 sm:text-5xl'>Top Rated Foods</h1>
            </div>

            {/* Filter By Types */}
            <div className='px-5 sm:mt-6'>
                <p className='text-orange-600 mt-3 sm:text-2xl'>Filter Types :</p>
                <div className='flex gap-6 py-3 flex-wrap'>
                    <button onClick={showAll} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('pizza')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('burger')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button onClick={() => filterType('salad')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>

            {/* Filter By Price */}
            <div className='px-5 sm:mt-6'>
                <p className='text-orange-600 mt-3 sm:text-2xl'>Filter Price :</p>
                <div className='flex gap-6 py-3 flex-wrap'>
                    <button onClick={() => filterPrice('$')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={() => filterPrice('$$')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='flex items-center justify-center text-orange-600 border-orange-600 border-2 px-4 py-1 sm:px-6 sm:py-2 sm:text-2xl rounded-2xl hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>

            {/* Food Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
                {foods.map((item, index) => (
                    <div key={index} className="rounded-2xl shadow-lg flex flex-col cursor-pointer">
                        <img className="w-full h-[200px] object-cover rounded-2xl" src={item.image} alt={item.name} />
                        <div className="p-2 text-center flex justify-between px-5">
                            <p className="font-bold">{item.name}</p>
                            <p className="text-gray-600 bg-amber-400 h-7 w-14 rounded-2xl flex items-center justify-center">
                                {item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Food;
