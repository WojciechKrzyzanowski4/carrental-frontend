import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeartOutline } from 'react-icons/io5';
import Offer from "./offer/Offer";
import Alert from "./utilComponents/Alert";

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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Find Your Perfect Ride</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 ">Explore our wide range of rental cars with unbeatable offers</p>
            <p className="text-lg md:text-xl lg:text-2xl mb-16 ">We promise excellence and an unforgetable expericence</p>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Contact us</button>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Feedback</button>

            <div className="gap-6 m-4 flex justify-center flex-col items-center mt-40">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className="relative grid h-[40rem] w-full max-w-[70rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 relative"
                    >
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={() => handleShowAlert(offer.id)}
                                className="rounded-full bg-[#e0fbfc] p-2 text-gray-500"
                            >
                                <IoHeartOutline className="w-12 h-12" />
                            </button>
                        </div>
                        <div className="relative p-6 px-6 py-14 md:px-12">
                            <h1 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                {offer.name}
                            </h1>
                            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                                {offer.price}
                            </h2>
                            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                                {offer.description}
                            </h5>
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