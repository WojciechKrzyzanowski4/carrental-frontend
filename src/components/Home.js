import React, {useEffect} from 'react'
import Button from './utilComponents/Button';


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
                   <Button variant={'primary'}>Contact Us</Button>
                   <Button variant={'outline-black'}>Feedback</Button>
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
                    <Button variant={'primary'}>Try Us! </Button>
                    <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">The future of renting cars</h1>
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