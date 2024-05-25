import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../utilComponents/Button";
import { SERVER_URL } from "../utilComponents/constant";
import Alert from "../utilComponents/Alert";

const customStyles = {
  content: {
    top: "550px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PaymentForm = ({ reservation, onPaymentSuccess }) => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
 
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handlePaymentSubmit = async() => {
    try{
      const response = await fetch(
        `${SERVER_URL}/record/book/${reservation.id}`,
          {method: 'PUT', credentials:'include'}
      );
      if (!response.ok) {
          throw new Error('Failed to book reservation');
      }
      closeModal();
      onPaymentSuccess();
      
    }catch(error){
     
      console.error('Error booking reservation:', error.message);
    }
  }
  return (
    <div>
      <Button variant={"outline-black"} onClick={openModal}>
        Pay
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Offer-edition-Modal"
        className="modal fixed inset-0 bg-white rounded-xl"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-10"
        ariaHideApp={false}
      >
        <div className="bg-transparent">
          <h2
            hidden="true"
            className="text-2xl font-bold mb-4"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            h2
          </h2>
          <div className="rounded-lg bg-white shadow-lg p-10">
            <div className="mb-10 text-center">
              <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Payment.
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label for="type1" className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                    
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    alt="cardImage"
                    class="h-8 ml-3"
                  />
                </label>
              </div>
              <div className="px-2">
                <label for="type2" className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type2"
                  />
                  <img
                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                    alt="cardImage"
                    class="h-8 ml-3"
                  />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  className="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Smith"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <input
                  className="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">
                  Expiration date
                </label>
                <div>
                  <select className="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                </div>
              </div>
              <div className="px-2 w-1/2">
                <select className="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                </select>
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">
                Security code
              </label>
              <div>
                <input
                  className="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="000"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              
              <Button variant={"primary"} to="/home" onClick={handlePaymentSubmit}>
                Pay now
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentForm;
