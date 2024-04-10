import React from 'react';

const Alert = ({message, onClose}) => {

   return (
        <div className="fixed bottom-0 right-0 m-8 z-50">
            <div className="bg-white  rounded-md shadow-lg p-4 max-w-sm w-full">
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold pr-2">{message}</p>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
                    >
                        <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18.293 1.293a1 1 0 0 0-1.414 0L10 8.586 2.707 1.293A1 1 0 1 0 1.293 2.707L8.586 10l-7.293 7.293a1 1 0 1 0 1.414 1.414L10 11.414l7.293 7.293a1 1 0 0 0 1.414-1.414L11.414 10l7.293-7.293a1 1 0 0 0 0-1.414z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Alert;

