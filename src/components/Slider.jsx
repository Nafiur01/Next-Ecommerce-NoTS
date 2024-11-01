"use client";
import Link from "next/link";
import React from "react";

const Slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg",
    url: "/",
    bg: "bg-gradient-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg",
    url: "/",
    bg: "bg-gradient-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/12164348/pexels-photo-12164348.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {Slides.map((slide) =>(
            <div>
                {/* TEXT CONTAINER */}
                <div>
                    <h2>{slide.description}</h2>
                    <h1>{slide.title}</h1>
                    <Link href={slide.url}><button>SHOP NOW</button></Link>
                </div>
                {/* IMAGE CONTAINER */}
                <div>

                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
