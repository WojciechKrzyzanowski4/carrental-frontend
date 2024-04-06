import React from 'react'
import { SERVER_URL } from '../utilComponents/constant';
import Button from '../utilComponents/Button';

const CreateReservation = ({offer, selectedDate, closeModal}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(new Date(selectedDate).toISOString())
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formJson),
            credentials: 'include'
        };
        fetch(
            SERVER_URL + '/reservation/create/' + offer.id,
            requestOptions
        ).then(async (response) => {
            if (!response.ok) {
                console.log("Error occurred");
                alert("the other admin was faster and managed to delete the car before you could edit it");
            } else {
                alert("car edited");
                performClose();
            }
        });
    }

    const performClose = () =>{
        closeModal()
    } 
        
  return (
    <div> 
    <form onSubmit={handleSubmit}>
        <input type="hidden" name='reservationDate' defaultValue={new Date(selectedDate).toISOString()}></input>
        <Button variant={"primary"} type='submit'>Edit</Button>
    </form>
    </div>
  )
}

export default CreateReservation;