import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";

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
            {offers.map(offer => (
            <div>
                <h1>
                    {offer.id}
                </h1>
                <h1>
                    {offer.name}
                </h1>
                <h1>
                    {offer.brand}
                </h1>
                <h1>
                    {offer.pric}
                </h1>
                <h1>
                    {offer.description}
                </h1>
            </div>
            ))

            }
        </div>
    );
}

export default Watched;