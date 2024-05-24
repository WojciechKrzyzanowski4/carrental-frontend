import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import OfferRecords from "./record/offerRecords";
import ContactForm from "./utilComponents/ContactForm";
import FeedbackForm from "./utilComponents/FeedbackForm";


const History = () => {
  const [offers, setOffers] = useState([]);

  const getOffers = async () =>{
    try{
        const response = await fetch(
            SERVER_URL + '/offer',
            {method: 'GET', redirect:'follow', credentials:'include'}
        );
        if (response.redirected) {
            document.location = response.url;
            return;
        }
        if (!response.ok) {
            throw new Error('Failed to fetch offers');
        }
        const data = await response.json();
        setOffers(data);
    }catch(error){
        console.error('Error fetching offers:', error.message);
    }
}


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getOffers();
  }, []);

  return (
    <div className="pt-40 text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl text-center lg:text-6xl font-bold leading-tight mb-4">Check finalized Reservations</h1>
            <p className="text-lg md:text-xl text-center lg:text-2xl mb-4 ">This are all the reservations that were made by the users</p>
            <div className="flex flex-wrap items-center justify-center">
                <ContactForm/>

                <FeedbackForm/>
            </div>
      {offers &&
        offers.map((offer) => (
          <OfferRecords offer={offer}/>
        ))}
    </div>
  );
};

export default History;
