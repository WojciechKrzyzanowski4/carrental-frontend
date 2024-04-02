import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lotties/carLottie.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


const CarAnimation = () => {
    return(
       <div>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
        />
       </div>
    );
}

export default CarAnimation;