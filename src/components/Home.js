import React, {useEffect} from 'react'
import Button from './utilComponents/Button';
import ContactForm from './utilComponents/ContactForm';
import LinkButton from './utilComponents/LinkButton'



function Home() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, []);


    return(
        <>
        <div className="py-20 md:py-28 text-center">
            <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -mx-4 py-10">
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Certified</span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">For 15 years we were the leaders in our field.</h1>
                <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Car Rental Service is the only platform that lets you drive our cars, the exact way you want to drive them.</p>
                <div className="flex flex-wrap items-center justify-center">
                  <ContactForm/>
                   <Button variant={'outline-black'}>Feedback</Button>
                </div>
                </div>
                <div className="w-full md:w-1/2 px-4 h-[400px] bg-[#e0fbfc] rounded-3xl">
                </div>
            </div>
            </div>
            <div className="container px-4 mx-auto">
             <div className="flex flex-wrap xl:items-center -mx-4">
             <div className="w-full md:w-1/2 px-4 h-[400px] bg-[#253237] rounded-3xl">
                </div>
                <div className="w-full md:w-1/2 px-4">
                
                <div className="relative mx-auto md:mr-0 max-w-max">
                    
                    <LinkButton text="Try, Us!" to="/offers" variant="primary"/>
                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">The future of renting cars</h1>
                    <span className="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Faster </span>
                    <span className="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">More Reliable </span>
                    <span className="inline-block py-px px-3 mx-4 text-xs leading-5 text-white bg-[#253237] uppercase rounded-2xl">Better </span>
                </div>
                </div>
             </div>
            </div>
        </div>
        </>
       
    );
}
export default Home;
