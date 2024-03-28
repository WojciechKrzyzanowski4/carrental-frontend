import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { SERVER_URL } from '../utilComponents/constant';

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


function EditComponent({car, handleClick}){

    let subtitle;
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    }
    
    function closeModal() {
    setIsOpen(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        
        const requestOptions = {
            method: "PUT", 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formJson),
            credentials:'include'
        }

        fetch(
            SERVER_URL + '/car/edit',
            requestOptions
        ).then(async response => {
            if(!response.ok){
                console.log("Error occurred")
                alert("the other admin was faster and managed to delete the car before you could edit it");
            }else{
                alert("car edited");
            }

            handleClick();
            
        })
    }

    return(
        <div>
        <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 m-4 w-[60%]" onClick={openModal}>Edit</button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
                <form onSubmit={handleSubmit}>
                    <input hidden name='id' defaultValue={car.id}></input>
                    <input name='brand' defaultValue={car.brand}></input>
                    <input name='model' defaultValue={car.model}></input>
                    <input name='year' defaultValue={car.year}></input>
                    <button type='submit'>Edit</button>
                </form>
        </Modal>
        </div>
    )
}

export default EditComponent;