"use client";

import React from "react";
import Image from "next/image";
import { SLIDER_LEFT_IMAGES, SLIDER_RIGHT_IMAGES } from "@/utils/helper";

const Slider = () => {
    return (
        <div id="overview" className="overflow-hidden max-w-1920 mx-auto">
            <div className="d-flex slider-left">
                {SLIDER_LEFT_IMAGES.map((obj, index) => (
                    <Image key={index} className="slider-image" src={obj} alt={`slider-left-${index}`} width={320} height={320} />
                ))}
            </div>
            <div className="d-flex slider-right">
                {SLIDER_RIGHT_IMAGES.map((obj, index) => (
                    <Image key={index} className="slider-image" src={obj} alt={`slider-right-${index}`} width={320} height={320} />
                ))}
            </div>
        </div>
    );
};

export default Slider;