import Button from "../utilComponents/Button";
import { SERVER_URL } from "../utilComponents/constant";

function CarForm({handleClick}) {

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());
        
        const requestOptions = {
            method: "POST", 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formJson),
            credentials:'include'
        }

        fetch(
            SERVER_URL + '/car',
            requestOptions
        ).then(async response => {
            if(!response.ok){
                //implement different behavoiur regarding the errors the backend provides
                console.log("Error occurred")
            }
            handleClick();
        })

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-[#253237] p-10">
        <input
          name="brand"
          placeholder="Enter car brand"
          className="block w-full px-4 py-2 mt-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
        <input
          name="model"
          placeholder="Enter car model"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
        <input
          name="year"
          placeholder="Enter car year"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
        <Button variant={'big'}
          type="submit"
        >
          Add car
        </Button>
      </form>
    )

}

export default CarForm;