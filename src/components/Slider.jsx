import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming this is your CSS file for styling
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import {sliderData} from "../data"

export default function Slider() {
    const [imageIndex, setImageIndex] = useState(0); // State for current image index

    const slideImage = (index) => {
        const newIndex = index >= sliderData.length ? 0 : index < 0 ? sliderData.length - 1 : index;
        setImageIndex(newIndex);
    };

    const updateClick = (increment) => {
        const newIndex = imageIndex + increment;
        slideImage(newIndex);
    };

    return (
        <section className="wrapper">
            <button id="prev" onClick={() => updateClick(-1)} >
                <MdNavigateBefore className="button text-3xl" />
            </button>

            <div className="image-container">
                <div
                    className="carousel"
                    style={{ transform: `translate(-${imageIndex * 100}%)` }}
                >
                    {
                        sliderData.map((item, index) => (
                            <div
                                className="carousel-item inline-block text-center"
                                key={index}
                            >
                                <img
                                    // className="carousel-item inline-block"
                                    // key={index}
                                    src={item.img}
                                // className='w-full'
                                />
                                <h2 className='text-2xl'>{item.title}</h2>
                                <p className='text-gray-600 mt-2'>{item.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <button id="next" onClick={() => updateClick(1)}>
                <MdNavigateNext className="button text-3xl" />
            </button>
        </section>
    );
}
