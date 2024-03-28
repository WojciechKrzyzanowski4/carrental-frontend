import React from "react";
import Modal from 'react-modal';
import { SERVER_URL } from "../utilComponents/constant";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};


const EditOffer = ({offer, handleOfferClick, cars}) => {

    let subtitle;
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        if (!formJson.name) {
            alert("name not provided");
            return; // Prevent form submission
        }
        if (!formJson.description) {
            alert("name not provided");
            return; // Prevent form submission
        }
        if (!formJson.price) {
            alert("name not provided");
            return; // Prevent form submission
        }
        if (!formJson.carId) {
            alert("name not provided");
            return; // Prevent form submission
        }
        
        const requestOptions = {
            method: "PUT", 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formJson),
            credentials:'include'
        }

        fetch(
            SERVER_URL + '/offer/edit',
            requestOptions
        ).then(async response => {
            if(!response.ok){
                console.log("Error occurred")
                alert("the other admin was faster and managed to delete the offer before you could edit it");
            }else{
                alert("offer edited");
            }

            handleOfferClick();
            
        })
    }

    return (
        <div>
          <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 m-4 w-[60%]" onClick={openModal}>Edit</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Offer-edition-Modal"
            className="modal fixed inset-0 flex items-center justify-center"
            overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
          >
            <div className="modal-container mx-auto p-16 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4" ref={(_subtitle) => (subtitle = _subtitle)}>Editing the Offer</h2>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" defaultValue={offer.id} />
                <input className="block mb-4 p-2 border border-gray-300 rounded" name="name" defaultValue={offer.name} />
                <input className="block mb-4 p-2 border border-gray-300 rounded" name="description" defaultValue={offer.description} />
                <input className="block mb-4 p-2 border border-gray-300 rounded" type="number" name="price" defaultValue={offer.price} />
                <select className="block mb-4 p-2 border border-gray-300 rounded width-[100%]" name="carId" defaultValue={offer.carId}>
                  <option value="">Select a car</option>
                  {cars.map(car => (
                    <option key={car.id} value={car.id}>{`${car.brand} ${car.model} (${car.year})`}</option>
                  ))}
                </select>
                <button className=" bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-[100%]" type='submit'>Edit</button>
              </form>
              <button className="absolute top-4 right-4 bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105" onClick={closeModal}>X</button>
            </div>
          </Modal>
        </div>
      );
      

}

export default EditOffer;