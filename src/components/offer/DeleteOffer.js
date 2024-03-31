import React from 'react'
import { SERVER_URL } from '../utilComponents/constant'

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
        <button className="bg-red-200 hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 m-4 w-[60%]" onClick={deleteOffer}>Delete</button>
    )

}

export default DeleteOffer;