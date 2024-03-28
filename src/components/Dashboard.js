import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import CarForm from "./car/CarForm";
import OfferForm from "./offer/OfferForm";
import DeleteComponent from "./car/DeleteComponent";
import EditComponent from "./car/EditComponent";
import User from "./user/User"

function Dashboard() {

    const [cars, setCars] = useState([]);
    //CREDENTIALS ARE THE MOST IMPORTANT THING IN THE WHOLE WORLD BTW
    const getCars = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/car',
                { method: 'GET', redirect: "follow", credentials:'include' }
            );
            if (response.redirected) {
                document.location = response.url;
                return;
            }
            if (!response.ok) {
                throw new Error('Failed to fetch cars');
            }
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error('Error fetching cars:', error.message);
        }
    }

    function handleClick() {
        getCars();
    }

    useEffect(()=>{
        document.body.style.overflow = 'visible';
        getCars();
    }, []);

    return (
        <div className="pt-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Manage the System</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4 ">Create all of the offers and add cars from this dashboard</p>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Contact us</button>
            <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60">Feedback</button>

            <p className="text-lg md:text-xl lg:text-2xl mb-4 mt-40">All the avaliable cars</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-8 ">
                {cars && cars.map((car) => (
                    <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-400">
                    <div className="px-6 py-4 ">
                        <div className="font-bold text-xl mb-2">{car.brand}</div>
                        <p className="text-gray-700 text-base">Model: {car.model}</p>
                        <p className="text-gray-700 text-base">Year: {car.year}</p>
                    </div>
                    <div className="px-6 py-4 ">
                        <EditComponent handleClick={handleClick} car={car}/>
                        <DeleteComponent handleClick={handleClick} id={car.id}/>
                    </div>
                    </div>
                ))}
            </div>

            <p className="text-lg md:text-xl lg:text-2xl mb-4 mt-40">Create and add a new car to the system</p>       
            <CarForm handleClick={handleClick}/>
            {cars.length > 0 && (
                <>
                    <p className="text-lg md:text-xl lg:text-2xl mb-4 mt-40">Create an offer for a car</p>
                    <OfferForm cars={cars}/>
                </>
            )}
            <User/>
            </div>
    )

}

export default Dashboard;