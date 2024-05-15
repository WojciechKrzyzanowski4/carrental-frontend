import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import { IoHeartDislike } from "react-icons/io5";
import Offer from "./offer/Offer";
import Alert from "./utilComponents/Alert";
import InvoiceModal from "./payment/InvoiceModal";
import PaymentForm from "./payment/PaymentForm";
import { FaRegStickyNote } from "react-icons/fa";

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

    function handleReservation() {
        getReservations();
    }

    useEffect(()=>{
        document.body.style.overflow = 'visible';
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        getReservations();
        getOffers();
    }, []);

    return(
        <div className="pt-40 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">These are your liked offers</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 p-4">We will send you a notification of any promotion about these offers</p>
            {offers.length===0 && (
                <div className="flex justify-center content-center pt-20">
                    <FaRegStickyNote size={100}/>
                </div>
            )}        
            <div className="grid grid-cols-1 gap-6 m-4 justify-center items-center pt-20 pb-20">
            {offers.map((offer) => (
                <div key={offer.id} className="relative flex flex-col items-center justify-center rounded-xl bg-center bg-[#253237] bg-overflow-hidden shadow-md">
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
                        <Offer offer={offer} handleReservation={handleReservation} />
                    </div>
                </div>
            ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">These are your reservations</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 p-4">You can pay for them here or in shop</p> 
            {reservations.length===0 && (
                <div className="flex justify-center content-center pt-20">
                    <FaRegStickyNote size={100}/>
                </div>
            )}  
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 m-4 justify-center items-center pt-20">
                {reservations.map((reservation) => (
                    <div key={reservation.id} className="relative flex flex-col rounded-xl bg-center border border-[#253237] bg-overflow-hidden shadow-md">
                        <div className="text-2xl text-center pl-5 mt-5">
                            Reservation {reservation.id}
                        </div>

                        <div className="m-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Reservation's date</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reservation.reservationDate}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Offer</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reservation.offer.name}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${reservation.offer.price}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Car</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reservation.offer?.brand} {reservation.offer.model} {reservation.offer.year}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Placed by</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reservation.user.name}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Contanct</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{reservation.user.email}</dd>
                            </div>
                            <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Pay or generate an invoice:
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                   <PaymentForm/>
                                   <InvoiceModal reservation={reservation}/>
                                </dd>
                            </div>
                            </dl>
                        </div>
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