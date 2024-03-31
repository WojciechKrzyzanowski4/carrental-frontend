import { SERVER_URL } from "../utilComponents/constant";
import { useState, useEffect } from 'react';
import Alert from "../utilComponents/Alert";

function DeleteComponent({id, handleClick}){

    const [showAlert, setShowAlert] = useState(false);

    function deleteCar(){

        const requestOptions = {
            method: "DELETE", 
            headers: {'Content-Type' : 'application/json'},
            credentials:'include'
        }

        let idObject = {id};

        fetch(
            SERVER_URL + '/car/' + idObject.id,
            requestOptions
        ).then(async response => {
            if(!response.ok){
                console.log("Error occurred");
                setShowAlert(true);
            }

            handleClick();
        })
    }

    useEffect(()=>{
        setShowAlert(false);
     }, []);

     
    return(
       <div>
        <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 m-4 w-[60%]" onClick={deleteCar}>Delete</button>
        {showAlert && (
            <Alert
                message="This car cannot be removed because there are offers with it"
                onClose={() => setShowAlert(false)}
            />
        )}
       </div>
       
    )
}

export default DeleteComponent;