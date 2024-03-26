import React from 'react';
import Modal from 'react-modal';

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

    //{"id":1,"name":"Offer 1","description":"Offer 1 description","price":1000.0,"model":"GLE","brand":"Mercedes","year":"2020"}
   
    return(
        <div>
        <button
          onClick={openModal}
          className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          View Details
        </button>
        <Modal
         isOpen={modalIsOpen}
         onAfterOpen={afterOpenModal}
         onRequestClose={closeModal}
         ariaHideApp={false}
         style={customStyles}
         contentLabel="Example Modal"
        >
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mr-16 mt-24 bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Close
          </button>

          <div className='flex justify-center items-center p-8 m-4 flex-col text-center i'>
            <h2 className="text-3xl">This is the section about the car</h2>
              <div className="text-lg font-semibold">
                  {offer.brand}
              </div>
              <div className="text-lg font-semibold">
                  {offer.model}
              </div>
              <div className="text-lg font-semibold">
                  {offer.year}
              </div>
              <h2 className="text-3xl">This is the section about the offer</h2>
              <div className="text-lg">
                  {offer.name}
              </div>
              <div className="text-lg">
                  {offer.price}
              </div>
              <div className="text-lg">
                  {offer.description}
              </div>

              <button
                  className="bg-blue-200 hover:bg-blue-800 text-black hover:text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full mt-20"
              >
                Make a reservation
              </button>
            </div>

          
        </Modal>
      </div>
    )
}

export default Offer;