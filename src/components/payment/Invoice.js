import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import Button from '../utilComponents/Button';
import { SERVER_URL } from '../utilComponents/constant';

const Invoice = ({reservation}) => {

    const makeInvoice = async() => {
        try{
            fetch(  SERVER_URL + '/reservation/' + reservation.id + '/invoice',
            {
                method: "GET",
                credentials: 'include'
            }
            ).then(async response => {
                if(!response.ok){
                    //implement different behavoiur regarding the errors the backend provides
                    console.log("Error occurred")
                }
                console.log("Success")
            })
        }catch(error){
                console.log(error);
        }
    }


   const targetRef = useRef();
   return (
      <div className="bg-white rounded-xl">
         
         <div ref={targetRef} className=" m-10 rounded-xl border border-gray-200 p-2">
            <div className="flex justify-between "> 
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
                <p className="text-gray-600">{reservation.user.name}</p>
                <p className="text-gray-600">123 Street Address</p>
                <p className="text-gray-600">City, State, Zip</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-center">Items:</h3>
                <div className="border border-gray-300 rounded-lg">
                    <div className="flex justify-between bg-gray-100 p-2 text-center">
                        <div className='w-[60px]  '>Offer</div>
                        <div className='w-[60px]  '>Price</div>
                        <div className='w-[60px]  '>Fee</div>
                        <div className='w-[60px]  '>Total</div>
                    </div>
                    <div className="flex justify-between p-2 text-center">
                        <div className='w-[60px]  '>{reservation.offer.name}</div>
                        <div className='w-[60px]  '>${reservation.offer.price}</div>
                        <div className='w-[60px]  '>${Math.floor((reservation.offer.price)/12)}</div>
                        <div className='w-[60px]  '>${reservation.offer.price + Math.floor((reservation.offer.price)/12)}</div>
                    </div>
                    <div className="flex justify-between p-2 text-center">
                        <div className='w-[60px]  '>Tax</div>
                        <div className='w-[60px]  '>${Math.floor((reservation.offer.price))*0.27}</div>
                        <div className='w-[60px]  '>$0</div>
                        <div className='w-[60px]  '>${Math.floor((reservation.offer.price))*0.27}</div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className="mb-6 text-3xl leading-tight font-bold tracking-tight">Total: ${reservation.offer.price + Math.floor((reservation.offer.price)/12) + Math.floor((reservation.offer.price))*0.27}</p>
            </div>
         </div>
         <div className="flex justify-center items-center">
         <Button variant={'outline-black'}
            onClick={() => {
                generatePDF(targetRef, {filename: 'page.pdf'})
                makeInvoice();
                
            }}  
         >Download PDF</Button>
         </div>
      </div>
   )
}

export default Invoice;