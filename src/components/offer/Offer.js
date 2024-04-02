import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { SERVER_URL } from '../utilComponents/constant';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentForm from '../payment/PaymentForm';
import Button from '../utilComponents/Button';

// Styles for the modal
const customStyles = {
  content: {
    top: '0%',
    left: '0%',
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

function Offer({ offer }) {
  // State variables
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reservedDates, setReservedDates] = useState([]);
  const [reservationStarted, setReservationStarted] = useState(false);

  // Function to open the modal
  function openModal() {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  }

  // Function called after modal has opened
  function afterOpenModal() {
    // No action required
  }

  // Function to close the modal
  function closeModal() {
    document.body.style.overflow = 'visible';
    setIsOpen(false);
  }

  // Fetch reserved dates from the server
  const getDates = async () => {
    try {
      const response = await fetch(
        SERVER_URL + '/reservation',
        { method: 'GET', redirect: "follow", credentials: 'include' }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch reserved dates');
      }
      const data = await response.json();
      setReservedDates(data);
    } catch (error) {
      console.error('Error fetching reserved dates:', error.message);
    }
  }

  // Check if a date is excluded (already reserved)
  const isDateExcluded = (date) => {
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    return reservedDates.some(reserved => reserved.reservationDate === dateString);
  };

  // Filter passed dates (already reserved)
  const filterPassedDate = (date) => {
    return !isDateExcluded(date);
  };

  // Fetch reserved dates when component mounts
  useEffect(() => {
    getDates();
    setReservationStarted(false);
  }, []);

  return (
    <div>
      {/* Button to open the modal */}
      <Button variant={'outline'} onClick={openModal}>View Details</Button>

      {/* Modal for displaying offer details */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Offer Modal"
       
      >
        <div className='absolute top-16 right-16'>
          {/* Button to close the modal */}
          <Button variant={'close'} onClick={closeModal}>Close</Button>
        </div>

        {/* Conditional rendering based on reservation state */}
        {reservationStarted ? (
          // Reservation in progress
          <>
            <h1 className='text-center'>Making a reservation on {selectedDate ? selectedDate.toLocaleDateString() : ''}</h1>
            <div className='flex items-center justify-center'>
              {/* Buttons to navigate or finalize reservation */}
              <Button variant={'primary'} onClick={() => setReservationStarted(false)}>Go back</Button>
              <Button variant={"primary"}>Finalize</Button>
            </div>
            {/* Payment form component */}
            <PaymentForm price={offer.price} />
          </>
        ) : (
          // Offer details and reservation selection
          <>
            <div class="mx-10">
              <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">Offer Information</h3>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details about the offer and the car.</p>
              </div>
              <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                  {/* Offer details */}
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
                  {/* Date selection for reservation */}
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
                  {/* Button to start reservation */}
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
  );
}

export default Offer;