import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeartDislike } from "react-icons/io5";
import Offer from "./offer/Offer";

const Watched = () =>{

    const [offers, setOffers] = useState([]);

    const getOffers = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/user/liked-offers',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.redirected) {
                document.location = response.url;
            }
            const data = await response.json();
            setOffers(data);
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    };

    useEffect(()=>{
        document.body.style.overflow = 'visible';
        getOffers();
    }, []);

    return(
        <div className="pt-16">
        
        
        <div className="grid grid-cols-1 gap-6 m-4 justify-center items-center pt-20">
            {offers.map((offer) => (
                <div key={offer.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-lg">
                    <div className="w-full h-80 bg-cover bg-center" /*this is here is somebody wants to add images*/ style={{ backgroundImage: `url(${offer.imageUrl})` }}>
                        <div className="absolute top-8 right-8">
                            <button className="rounded-full bg-[#e0fbfc] p-2 text-gray-500 hover:text-black">
                                <IoHeartDislike className="w-12 h-12 hover:w-14 hover:h-14" />
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <h1 className="mb-4 font-sans text-2xl font-semibold text-white">{offer.name}</h1>
                        <h2 className="mb-4 font-sans text-xl font-semibold text-white">{offer.price}</h2>
                        <Offer offer={offer} />
                    </div>
                </div>
            ))}
            </div>
    </div>
       
        
    );
}

export default Watched;