import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../utilComponents/constant'
import Button from '../utilComponents/Button'
import Alert from '../utilComponents/Alert';

const DeleteOffer = ({id, handleOfferClick }) => {

    const [showAlert, setShowAlert] = useState(false);

    const deleteOffer = () =>{

        const requestOptions = {
            method: "DELETE", 
            headers: {'Content-Type' : 'application/json'},
            credentials:'include'
        }

        let idObject = {id};

        fetch(
            SERVER_URL + '/offer/' + idObject.id,
            requestOptions
        ).then(async response => {
            if(!response.ok){
                handleShowAlert();
            }else{
                handleOfferClick();
            }
           
        })
    }

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000); 
    };

    useEffect(()=>{
        setShowAlert(false);
    }, [])


    return(
        <>
        {showAlert && (
            <Alert
                message="This offer cannot be removed because users have active reservations for it"
                onClose={() => setShowAlert(false)}
            />
        )}
         <Button variant={'secondary'}onClick={deleteOffer}>Delete</Button>
        
        </>
       
       
    )

}

export default DeleteOffer;