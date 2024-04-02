import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../utilComponents/constant";
import Button from "../utilComponents/Button";

function User() {
    const [user, setUser] = useState();
    const [managed, setManaged] = useState();

    const getUser = async () => {
        try {
            const response = await fetch(
                SERVER_URL + '/user',
                { method: 'GET', credentials: 'include' }
            );

            const userData = await response.json();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="max-w-xxl mx-auto bg-white shadow-md rounded-xl overflow-hidden border border-[#253237] p-10">
            {user ? (
                <div class="mx-10">
                <div class="px-4 sm:px-0">
                  <h3 class="text-base font-semibold leading-7 text-gray-900">Your current account details</h3>
                  
                </div>
                <div class="mt-6 border-t border-gray-100">
                  <dl class="divide-y divide-gray-100">
                    {/* Offer details */}
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Role</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.role} </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Source</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.source}</dd>
                    </div>
                  </dl>
                </div>
                <div class="px-4 sm:px-0">
                  <Button variant={'outline-black'}>Manage account</Button>
                </div>
              </div>
            ) : (
                <p className="text-center">Loading user data...</p>
            )}
        </div>
    );
}

export default User;