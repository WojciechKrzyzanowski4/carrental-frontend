import React from "react";
import Modal from "react-modal";
import { SERVER_URL } from "../utilComponents/constant";
import Button from "../utilComponents/Button";

const customStyles = {
  content: {
    top: "550px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function EditComponent({ car, handleClick }) {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formJson),
      credentials: "include",
    };

    fetch(SERVER_URL + "/car/edit", requestOptions).then(async (response) => {
      if (!response.ok) {
        console.log("Error occurred");
        alert(
          "the other admin was faster and managed to delete the car before you could edit it"
        );
      } else {
        alert("car edited");
      }
      handleClick();
    });
  }

  return (
    <div>
      <Button variant={"primary"} onClick={openModal}>
        Edit
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Car-edition-Modal"
        className="modal fixed inset-0 flex items-center justify-center"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-10"
        ariaHideApp={false}
      >
        <div className="modal-container mx-auto p-16 bg-white rounded-lg shadow-lg">
          <h2
            className="text-2xl font-bold mb-4"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            Editing the Car
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" defaultValue={car.id}></input>
            <input
              className="block mb-4 p-2 border border-gray-300 rounded"
              name="brand"
              defaultValue={car.brand}
            ></input>
            <input
              className="block mb-4 p-2 border border-gray-300 rounded"
              name="model"
              defaultValue={car.model}
            ></input>
            <input
              className="block mb-4 p-2 border border-gray-300 rounded"
              name="year"
              defaultValue={car.year}
            ></input>
            <button
              className=" bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105 w-[100%]"
              type="submit"
            >
              Edit
            </button>
          </form>
          <button
            className="absolute top-4 right-4 bg-[#e0fbfc] hover:bg-[#253237] text-black hover:text-white font-bold py-3 px-6 shadow-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default EditComponent;
