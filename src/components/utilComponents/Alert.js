import React from 'react';

const Alert = ({message, onClose}) => {

    return (
        <div className="fixed bottom-4 right-4 bg-[#253237] text-white px-4 py-2 rounded shadow text-white">
            <span>{message}</span>
        </div>
    );
}

export default Alert;

