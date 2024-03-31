import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeartOutline } from 'react-icons/io5';
import Offer from "./offer/Offer";
import Alert from "./utilComponents/Alert";
import CarAnimation from "./animated/carAnimation";

function Offers() {
    const [offers, setOffers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const getOffers = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/offer',
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

    const likeOffer = async (id) => {
        try {
            const response = await fetch(
                SERVER_URL + '/offer/' + id + '/like',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.ok) {
                console.log("Offer liked successfully");
            } else {
                console.error("Error occurred while liking offer");
            }
        } catch (error) {
            console.error('Error liking offer:', error);
        }
    };

    const handleShowAlert = (id) => {
        likeOffer(id);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    };

    useEffect(() => {
        document.body.style.overflow = 'visible';
        getOffers();
    }, []);

    return (
        <div className="pt-40 pb-4 bg-white">
            <CarAnimation/>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Find Your Perfect Ride</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 ">Explore our wide range of rental cars with unbeatable offers</p>
            <p className="text-lg md:text-xl lg:text-2xl mb-16 ">We promise excellence and an unforgetable expericence</p>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Contact us</button>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Feedback</button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-4 justify-center items-center mt-40 pt-20">
            {offers.map((offer) => (
                <div key={offer.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-overflow-hidden shadow-lg">
                    <div className="w-full h-52 bg-cover bg-center" style={{ backgroundImage: `url(${offer.imageUrl})` }}>
                        <div className="absolute top-4 right-4">
                            <button onClick={() => handleShowAlert(offer.id)} className="rounded-full bg-[#e0fbfc] p-2 text-gray-500">
                                <IoHeartOutline className="w-12 h-12" />
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
    {showAlert && (
    <Alert
        message="You have liked a new offer"
        onClose={() => setShowAlert(false)}
    />
)}
        </div>
    );
}

export default Offers;