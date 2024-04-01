import React, {useEffect} from 'react'
import CarAnimation from './animated/carAnimation';


function Home() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
    }, []);

    return(
        <>
        <div class="py-20 md:py-28">
            <div class="container px-4 mx-auto">
            <div class="flex flex-wrap xl:items-center -mx-4 py-10">
                <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Certified</span>
                <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">For 15 years we were the leaders in our field.</h1>
                <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Car renatl service is the only platform that lets you drive our cars, the exact way you want to drive them.</p>
                <div class="flex flex-wrap items-center justify-center">
                    <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Contact us</button>
                    <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Feedback</button>
                </div>
                </div>
                <div class="w-full md:w-1/2 px-4 h-[400px] bg-[#e0fbfc] rounded-3xl">
                
              
                </div>
            </div>
            </div>
            <div class="container px-4 mx-auto">
             <div class="flex flex-wrap xl:items-center -mx-4">
             <div class="w-full md:w-1/2 px-4 h-[400px] bg-[#253237] rounded-3xl">
                </div>
                <div class="w-full md:w-1/2 px-4">
                <div class="relative mx-auto md:mr-0 max-w-max">
                    <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">The future of renting cars</h1>
                    <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Try Us! </p>
                    <span class="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Faster </span>
                    <span class="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">More Reliable </span>
                    <span class="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Better </span>
                </div>
                </div>
             </div>
            </div>
        </div>
        </>
       
    );
}
export default Home;