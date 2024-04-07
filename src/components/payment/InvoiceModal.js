import React from 'react'
import Modal from 'react-modal';
import Button from '../utilComponents/Button';
import Invoice from './Invoice';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '80%',
      height: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};


const InvoiceModal = ({reservation}) => {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        subtitle.style.color = '#000';
    }
    function closeModal() {
        setIsOpen(false);
    }

  return (
    <div>
    <Button variant={'outline-black'}onClick={openModal}>Invoice</Button>
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
      <div className="bg-transparent">
        <h2 className="text-2xl font-bold" ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <div className="flex justify-center items-center">
            <h1 class="mt-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Invoice.</h1>
        </div>
       
        <Invoice reservation={reservation}/>    
      </div>
    </Modal>
  </div>
  )
}

export default InvoiceModal