import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Button from "../utilComponents/Button";
import Alert from "./Alert";
import { SERVER_URL } from "./constant";

const customStyles = {
  content: {
    top: "550px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    height: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FeedbackForm = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "",
    overview: "",
    description: "",
    type: "bug", // default type
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    setAlertMessage("Your feedback has been submitted");
  }, []);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#000";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(formData);

    if(formData.description==="" || formData.email==="" || formData.overview===""){
      setAlertMessage("please fill out every field");
      handleShowAlert();
      return;
    }
   
    const formJson = JSON.stringify(formData)
    console.log(formJson)

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formJson,
      credentials: "include",
    };

    fetch(SERVER_URL + "/send/feedback", requestOptions).then(async (response) => {
      if (!response.ok) {
        //implement different behavoiur regarding the errors the backend provides
        setAlertMessage("error sending email");
        handleShowAlert();
        closeModal();
      }
      closeModal();
      setAlertMessage("email send succesfully");
      handleShowAlert();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Button variant={"outline-black"} onClick={openModal}>
        Feedback
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Feedback Modal"
        className="modal fixed inset-0 bg-white rounded-xl"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-10"
        ariaHideApp={false}
      >
        <div className="modal-container mx-auto">
          <h2
            hidden="true"
            className="text-2xl font-bold mb-4"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            h2
          </h2>
          <section className="bg-white dark:bg-gray-900 rounded-xl">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Feedback.
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block p-2.5 mb-2 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="overview"
                    className="block mb-2  font-medium text-gray-900 dark:text-gray-300"
                  >
                    What is your feedback about?
                  </label>
                  <input
                    type="text"
                    name="overview"
                    placeholder="overview"
                    value={formData.overview}
                    onChange={handleChange}
                    className="block p-2.5 mb-2 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
                  >
                    More detailed description
                  </label>
                  <textarea
                    rows="4"
                    name="description"
                    placeholder="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="block p-2.5 mb-2 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-gray-900 dark:text-gray-300 mb-2">
                    Type of feedback
                  </label>
                  <div className="flex flex-row justify-center items-center shadow-sm border border-gray-300 rounded-md p-4">
                    <label
                      className="mr-4 ml-4 p-2 transition-all duration-400 rounded-md"
                      htmlFor="bug"
                      style={
                        formData.type === "bug"
                          ? { backgroundColor: "#253237", color: "white" }
                          : { backgroundColor: "#e0fbfc" }
                      }
                    >
                      Bug
                    </label>
                    <input
                      type="radio"
                      name="type"
                      value="bug"
                      id="bug"
                      checked={formData.type === "bug"}
                      onChange={handleChange}
                      className="m-2 w-4 h-4 hidden peer"
                    />
                    <label
                      className="mr-4 ml-4 p-2 transition-all duration-400 rounded-md"
                      htmlFor="feature"
                      style={
                        formData.type === "feature"
                          ? { backgroundColor: "#253237", color: "white" }
                          : { backgroundColor: "#e0fbfc" }
                      }
                    >
                      Feature Request
                    </label>
                    <input
                      type="radio"
                      name="type"
                      value="feature"
                      id="feature"
                      checked={formData.type === "feature"}
                      onChange={handleChange}
                      className="m-2 w-4 h-4 hidden peer"
                    />
                    <label
                      className="mr-4 ml-4 p-2 transition-all duration-400 rounded-md"
                      htmlFor="general"
                      style={
                        formData.type === "general"
                          ? { backgroundColor: "#253237", color: "white" }
                          : { backgroundColor: "#e0fbfc" }
                      }
                    >
                      General Feedback
                    </label>
                    <input
                      type="radio"
                      name="type"
                      value="general"
                      id="general"
                      checked={formData.type === "general"}
                      onChange={handleChange}
                      className="m-2 w-4 h-4 hidden peer"
                    />
                  </div>
                </div>
                <Button type="submit" variant={"big"}>
                  Submit
                </Button>
              </form>
            </div>
          </section>
        </div>
      </Modal>
      {showAlert && (
        <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default FeedbackForm;
