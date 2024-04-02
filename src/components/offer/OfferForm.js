import React from 'react'
import { useState, useEffect } from 'react'
import { SERVER_URL } from '../utilComponents/constant';
import Alert from '../utilComponents/Alert';
import Button from '../utilComponents/Button';

const OfferForm = ({cars, handleOfferClick}) => {

    const[formData, setFormData] = useState({
        name:'',
        description:'',
        price:'',
        carId:''
    })

    const [showAlert, setShowAlert] = useState();
    const [alertMessage, setAlertMessage] = useState();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    useEffect(()=>{
        setAlertMessage("You have created a new offer");
    }, []);


    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000); 
    };

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        if (!formJson.name) {
            setAlertMessage("please provide a name for the offer");
            handleShowAlert();
            return; // Prevent form submission
        }
        if (!formJson.description) {
            setAlertMessage("please provide a description for the offer");
            handleShowAlert();
            return; // Prevent form submission
        }
        if (!formJson.price) {
            setAlertMessage("please provide a valid price for the offer");
            handleShowAlert();
            return; // Prevent form submission
        }
        if (!formJson.carId) {
            setAlertMessage("please select the car the offer is about");
            handleShowAlert();
            return; // Prevent form submission
        }
        
        const requestOptions = {
            method: "POST", 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formJson),
            credentials:'include'
        }

        fetch(
            SERVER_URL + '/offer/create',
            requestOptions
        ).then(async response => {
            if(!response.ok){
                //implement different behavoiur regarding the errors the backend provides
                console.log("Error occurred")
            }
            setAlertMessage("You have created a new offer");
            handleOfferClick();
        })
    }

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-[#253237] p-10">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter offer name'
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    
                <textarea
                    rows='4'
                        type="text"
                        name="description"
                        placeholder="Enter offer description"
                        value={formData.description}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    
                   <input
                        type="number"
                        name="price"
                        placeholder="Enter offer price"
                        value={formData.price}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <select
                        name="carId"
                        value={formData.carId}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select a car</option>
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>{`${car.brand} ${car.model} (${car.year})`}</option>
                        ))}
                    </select>
                </div>
                <Button
                    type="submit"
                    onClick={() => handleShowAlert()}
                    variant={'big'}
                >
                    Submit
                </Button>
            </form>

            {showAlert && (
                <Alert
                    message={alertMessage}
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
      );
};

export default OfferForm;
