import { SERVER_URL } from "../utilComponents/constant";
import { useState, useEffect } from 'react';
import Alert from "../utilComponents/Alert";
import Button from "../utilComponents/Button";

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
        <Button variant={"secondary"}onClick={deleteCar}>Delete</Button>
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