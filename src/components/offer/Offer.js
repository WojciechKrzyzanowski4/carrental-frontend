import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { SERVER_URL } from '../utilComponents/constant';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentForm from '../payment/PaymentForm';
import Button from '../utilComponents/Button';

const customStyles = {
  content: {
    top:'0%',
    left:'0%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    border: 'none',
    paddingTop: '8rem',
    margin: '0rem' 
  },
};

function Offer({offer}){

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [reservedDates, setReservedDates] = useState([]);
    const [reservationStarted, setReservationStarted] = useState(false);
 

    function openModal() {
      document.body.style.overflow = 'hidden';
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        //shit do nothing man hihi
    }
    
    function closeModal() {
        document.body.style.overflow = 'visible';
        setIsOpen(false);
    }

    const getDates = async () => {
      try {
          let id = offer.id;
          const response = await fetch(
              SERVER_URL + '/reservation',
              { method: 'GET', redirect: "follow", credentials:'include' }
          );
          
          if (!response.ok) {
              throw new Error('Failed to fetch cars');
          }
          const data = await response.json();
          setReservedDates(data);
      } catch (error) {
          console.error('Error fetching cars:', error.message);
      }
    }

    const isDateExcluded = (date) => {
      const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
      return reservedDates.some(reserved => reserved.reservationDate === dateString);
    };

    const filterPassedDate = (date) => {
      return !isDateExcluded(date);
    };

    useEffect(()=>{
      getDates();  
      setReservationStarted(false);
      }, []);

    return(
        <div>
       <Button variant={'primary'} onClick={openModal}>View Details</Button>
        <Modal
         isOpen={modalIsOpen}
         onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         ariaHideApp={false}
         style={customStyles}
         contentLabel="Example Modal"
        >
          <div className='absolute top-16 right-16'>
            <Button variant={'close'} onClick={closeModal}>Close</Button>
          </div>
         
          {reservationStarted ? (
            <>
            <h1 className='text-center'> im making a reservaiton on {selectedDate ? selectedDate.toLocaleDateString() : ''}</h1>
            <div className='flex items-center justify-center'>
            <Button variant={'primary'} onClick={() => setReservationStarted(false)}>Go back</Button>
            <Button variant={"primary"}>Finalize</Button>
            </div>
          
            <PaymentForm price={offer.price}/>
            </>
           ) : (
            <>
              <div class="mx-10">
                <div class="px-4 sm:px-0">
                  <h3 class="text-base font-semibold leading-7 text-gray-900">Offer Information</h3>
                  <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">The details and car in question.</p>
                </div>
                <div class="mt-6 border-t border-gray-100">
                  <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Offer</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{offer.name}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Price</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${offer.price}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Car</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{offer.brand} {offer.model} {offer.year}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Availability</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Yes</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">Description</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{offer.description}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">See Availability</dt>
                      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <DatePicker
                          selected={selectedDate}
                          onChange={date => setSelectedDate(date)}
                          filterDate={filterPassedDate}
                          minDate={new Date()}
                          placeholderText="Select a date" />
                      </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-sm font-medium leading-6 text-gray-900">
                        <Button variant={"primary"}
                          onClick={() => setReservationStarted(true)}
                        >
                          Make a reservation
                        </Button>
                      </dt>
                      
                    </div>
                  </dl>
                </div>
                <div class="px-4 sm:px-0">
                  <h3 class="text-base font-semibold leading-7 text-gray-900">How to proceed?</h3>
                  <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Please select the date you want your reservation to be on</p>
                </div>
              </div>
            </>
           )}
        </Modal>
      </div>
    )
}

export default Offer;