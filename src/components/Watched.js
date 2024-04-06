import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeartDislike } from "react-icons/io5";
import Offer from "./offer/Offer";
import Alert from "./utilComponents/Alert";

const Watched = () =>{

    const [offers, setOffers] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [reservations, setReservations] = useState([]);


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

    const getReservations = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/user/reservations',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.redirected) {
                document.location = response.url;
            }
            const data = await response.json();
            setReservations(data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
        }
    };


    const dislikeOffer = async (id) => {
        try {
            const response = await fetch(
                SERVER_URL + '/offer/' + id + '/dislike',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.ok) {
                console.log("Offer disliked successfully");
            } else {
                console.error("Error occurred while liking offer");
            }
        } catch (error) {
            console.error('Error liking offer:', error);
        }
    };

    const handleShowAlert = async (id) => {
        await dislikeOffer(id);
        getOffers();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    };

    useEffect(()=>{
        document.body.style.overflow = 'visible';
        getReservations();
        getOffers();
    }, []);

    return(
        <div className="pt-16 text-center">
            <div className="grid grid-cols-1 gap-6 m-4 justify-center items-center pt-20">
            {offers.map((offer) => (
                <div key={offer.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-lg">
                    <div className="w-full h-80 bg-cover bg-center" /*this is here is somebody wants to add images*/ style={{ backgroundImage: `url(${offer.imageUrl})` }}>
                        <div className="absolute top-8 right-8">
                            <button onClick={() => handleShowAlert(offer.id)} className="rounded-full p-2 transition duration-300 ease-in-out text-red-500 hover:text-gray-500">
                                <IoHeartDislike className="w-12 h-12" />
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
            <div className="grid grid-cols-1 gap-6 m-4 justify-center items-center pt-20">
            {reservations.map((reservation) => (
                <div key={reservation.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-lg">
                    <h2 className="mb-4 font-sans text-xl font-semibold text-white"> Reservation for: {reservation.reservationDate}</h2>
                    <h2 className="mb-4 font-sans text-xl font-semibold text-white"> The reservation is for this offer: {reservation.offerName}</h2>
                 
                </div>
            ))}
            </div>
            {showAlert && (
            <Alert
                message="An offer has been disliked"
                onClose={() => setShowAlert(false)}
            />
            )}
        </div>
       
        
    );
}

export default Watched;