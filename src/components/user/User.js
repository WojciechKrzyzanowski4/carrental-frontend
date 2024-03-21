import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../utilComponents/constant";



function User(){

    const[user, setUser] = useState();


    const getUser = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/user',
                { method: 'GET', credentials:'include' }
            );
            
            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    useEffect(()=>{
        getUser();
    }, []);

    return(
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-400 p-10 m-20">
        {user ? (
          <div>
            <p className="text-lg font-semibold">User Details</p>
            <div className="mt-4">
              <p className="text-gray-700">User role: {user.role}</p>
              <p className="text-gray-700">User email: {user.email}</p>
              <p className="text-gray-700">User Name: {user.name}</p>
              <p className="text-gray-700">User source: {user.source}</p>
              {/* Add more user data as needed */}
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    )
}

export default User;