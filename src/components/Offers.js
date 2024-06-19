import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeart } from "react-icons/io5";
import Offer from "./offer/Offer";
import Alert from "./utilComponents/Alert";


function Offers() {
    const [offers, setOffers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [allOffers, setAllOffers] = useState([]); 
    const [likedOffers, setLikedOffers] = useState([]);

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
            setAllOffers(data);
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
                getLikedOffers();
            } else {
                console.error("Error occurred while liking offer");
               
            }
        } catch (error) {
            console.error('Error liking offer:', error);
        }
    };

    const getLikedOffers = async() => {
        try {
            const response = await fetch(
                SERVER_URL + '/user/liked-offers',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.redirected) {
                document.location = response.url;
            }
            const data = await response.json();
            setLikedOffers(data);
        } catch (error) {
            console.error('Error fetching offers:', error);
        }
    }

    const handleShowAlert = (id) => {
        likeOffer(id);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    };

    function handleReservation(){
        console.log("reservation added");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements['default-search'].value;
        const tempOffers = allOffers.filter(offer => {
            const offerDetails = offer.name + " " + offer.brand + " "+ offer.model;
            return offerDetails.toLowerCase().includes(searchValue.toLowerCase())
        });
        setOffers(tempOffers);
    };

    useEffect(() => {
        document.body.style.overflow = 'visible';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        getOffers();
        getLikedOffers();
    }, []);

    return ( 
        <div className="pt-40 pb-4 text-center bg-[/background.jpg] bg-cover bg-center h-100 " >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Find Your Perfect Ride</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 ">Explore our wide range of rental cars with unbeatable offers</p>
            <p className="text-lg md:text-xl lg:text-2xl mb-16 ">We promise excellence and an unforgetable expericence</p>
            <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" name="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search offers" />
                    <button 
                        type="submit" 
                        className="text-white absolute right-2.5 bottom-2.5 bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Search</button>
                </div>
            </form>
           
           

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 m-10 justify-center items-center mt-20 pt-20">
            {offers.length > 0 && likedOffers.length >= 0 && (
                offers.map((offer) => (
                    <div key={offer.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-lg hover:scale-105 duration-500 ease-in-out">
                    <div className="w-full h-80 bg-cover bg-center" /*this is here is somebody wants to add images*/ style={{ backgroundImage: `url(${offer.imageUrl})` }}>
                        <div className="absolute top-4 right-4">
                        <button onClick={() => handleShowAlert(offer.id)} className={`w-12 h-12 transition duration-300 ease-in-out ${likedOffers.some(likedOffer => likedOffer.id === offer.id) ? 'text-red-500' : 'text-gray-500'}`}>
                            <IoHeart className="w-12 h-12 transition duration-300 ease-in-out" />
                        </button>
                        </div>
                    </div>
                        <div className="p-6">
                            <h1 className="mb-4 font-sans text-2xl font-semibold text-white">{offer.name}</h1>
                            <h2 className="mb-4 font-sans text-xl font-semibold text-white">{offer.price}</h2>
                            <Offer offer={offer} handleReservation={handleReservation} />
                        </div>
                    </div>
                ))
            )}
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