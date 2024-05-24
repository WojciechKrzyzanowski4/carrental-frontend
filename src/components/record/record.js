import React from "react";

function Record({ record }) {
  return (
    <div className="border border-gray-900 rounded-lg p-4 flex items-center justify-center">
      {record ? (
        <div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold  text-gray-900 pb-2">
              Reservation number {record.id}
            </h3>
          </div>
          <div className="flex">
            <div className="text-sm font-medium text-gray-900 pr-4">
              Finalized Reservations date
            </div>
            <div className="text-sm text-gray-700">{record.recordDate}</div>
          </div>
          <div className="flex">
            <div className="text-sm font-medium text-gray-900 pr-4">
              Resrvation about 
            </div>
            <div className="text-sm text-gray-700">
             {record.offer.year} {record.offer.brand} {record.offer.model}
            </div>
          </div>
          <div className="flex">
            <div className="text-sm font-medium text-gray-900 pr-4">
              Resrvation status
            </div>
            <div className="text-sm text-gray-700">{record.status}</div>
          </div>
          <div className="flex">
            <div className="text-sm font-medium text-gray-900 pr-4">
              Price
            </div>
            <div className="text-sm text-gray-700">
              {record.offer.price}
              {".00$"}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading record data...</p>
      )}
    </div>
  );
}

export default Record;
