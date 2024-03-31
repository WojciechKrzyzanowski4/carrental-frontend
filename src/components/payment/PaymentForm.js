import React from 'react';

const PaymentForm = ({price}) => {

    return(
        <div class="flex justify-center items-center ">
            <div class="h-auto w-80 bg-white p-3 rounded-lg m-6 border border-gray-300">
                <p class="text-xl font-semibold">Payment Details</p>
                <div class="input_text mt-6 relative"> <input type="text" class="mb-4 mt-1 p-2 border border-gray-300 w-full rounded" placeholder="Jan Kleszczewski" /> <span class="absolute left-0 text-sm -top-4">Cardholder Name</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
                <div class="input_text mt-4 relative"> <input type="text" class="mb-4 mt-1 p-2 border border-gray-300 w-full rounded" placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span class="absolute left-0 text-sm -top-4">Card Number</span> <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
                <div class="mt-8 flex gap-5 ">
                    <div class="input_text relative w-full"> <input type="text" class="mb-4 mt-1 p-2 border border-gray-300 w-full rounded"  placeholder="mm/yyyy" data-slots="my" /> <span class="absolute left-0 text-sm -top-4">Expiry</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                    <div class="input_text relative w-full"> <input type="text" class="mb-4 mt-1 p-2 border border-gray-300 w-full rounded"  placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span class="absolute left-0 text-sm -top-4">CVV</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
                </div>
                <p class="text-lg text-center mt-4 text-gray-600 font-semibold">Total: ${price}</p>
                <div class="flex justify-center mt-4"> <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105  m-5 w-60"
            >Pay</button> </div>
            </div>
        </div>

    );

}

export default PaymentForm