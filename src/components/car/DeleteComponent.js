import { SERVER_URL } from "../utilComponents/constant";

function DeleteComponent({id, handleClick}){


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
                console.log("Error occurred")
            }

            handleClick();
        })

    }


    return(
        <button className="bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 m-4 w-[60%]" onClick={deleteCar}>Delete</button>
    )
}

export default DeleteComponent;