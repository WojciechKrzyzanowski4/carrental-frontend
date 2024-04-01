import React from 'react'
import { SERVER_URL } from '../utilComponents/constant'
import Button from '../utilComponents/Button'

const DeleteOffer = ({id, handleOfferClick }) => {


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
                console.log("Error occurred")
            }

            handleOfferClick();
        })
    }

    return(
        <Button variant={'secondary'}onClick={deleteOffer}>Delete</Button>
    )

}

export default DeleteOffer;