import React, {useEffect} from 'react'
import PaymentForm from './payment/PaymentForm';
import CarAnimation from './animated/carAnimation';

function Home() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
    }, []);

    return(
        <>
        <div class="py-20 md:py-28">
            <div class="container px-4 mx-auto">
            <div class="flex flex-wrap xl:items-center -mx-4 py-20">
                <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Certified</span>
                <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">For 15 years we were the leaders in our field.</h1>
                <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Car renatl sercie is the only platform that lets you drive our cars, the exact way you want to drive them.</p>
                <div class="flex flex-wrap items-center justify-center">
                    <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Contact us</button>
                    <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Feedback</button>
                </div>
                </div>
                <div class="w-full md:w-1/2 px-4">
                <CarAnimation/>
                <div class="relative mx-auto md:mr-0 max-w-max ">
                    
                </div>
                </div>
            </div>
            </div>
            <div class="container px-4 mx-auto">
             <div class="flex flex-wrap xl:items-center -mx-4 py-20">
                <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0 bg-black">
                
                <CarAnimation/>
                
                </div>
                <div class="w-full md:w-1/2 px-4">
                <div class="relative mx-auto md:mr-0 max-w-max">
                    <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                </div>
                </div>
             </div>
            </div>
        </div>
        </>
       
    );
}
export default Home;