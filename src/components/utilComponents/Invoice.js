import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Invoice = ({reservation}) => {
   const targetRef = useRef();
   return (
      <div className="bg-white pt-10">
         <button 
         onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}
         className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white hover:border hover:border-white-500 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mb-10"
         >Download PDF</button>
         <div ref={targetRef} className="pb-20">
            <div className="mb-4 flex justify-between "> 
                <div>
                    <h2 className="text-xl font-bold">Invoice</h2>
                    <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div>
                    <p className="text-gray-600">#INV123456</p>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Bill To:</h3>
                <p className="text-gray-600">Customer Name</p>
                <p className="text-gray-600">123 Street Address</p>
                <p className="text-gray-600">City, State, Zip</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Items:</h3>
                <div className="border border-gray-300 rounded-lg">
                    <div className="flex justify-between bg-gray-100 p-2">
                        <div>Offer</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Total</div>
                    </div>
                    <div className="flex justify-between p-2">
                        <div>Product 1</div>
                        <div>1</div>
                        <div>$10.00</div>
                        <div>$10.00</div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-lg font-semibold">Total: $40.00</p>
            </div>
         </div>
      </div>
   )
}

export default Invoice;