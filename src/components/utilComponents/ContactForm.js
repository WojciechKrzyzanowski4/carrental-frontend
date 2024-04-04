import React from "react";
import Modal from 'react-modal';
import Button from "../utilComponents/Button";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '60%',
      height: '70%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};


const ContactForm = () => {

    let subtitle;
    
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#000';
    }
    
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
          <Button variant={'primary'}onClick={openModal}>Contact Us</Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Offer-edition-Modal"
            className="modal fixed inset-0 bg-white rounded-xl"
            overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50"
            ariaHideApp={false}
          >
            <div className="modal-container mx-auto">
              <h2 className="text-2xl font-bold mb-4" ref={(_subtitle) => (subtitle = _subtitle)}></h2>
              <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Get in touch with our team.</h1>
                
                    <form action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="cars@ilikecars.com"/>
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you"/>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <Button variant={"big"}>Send</Button>
                    </form>
                </div>
                </section>
            </div>
          </Modal>
        </div>
      );
      

}

export default ContactForm;