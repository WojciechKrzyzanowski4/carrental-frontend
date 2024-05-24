import React, { useEffect, useState, useCallback } from "react";
import Record from "./record";
import { SERVER_URL } from "../utilComponents/constant";

const OfferRecords = ({ offer }) => {
  const [records, setRecords] = useState([]);

  const getRecords = useCallback(async () => {
    try {
      const response = await fetch(`${SERVER_URL}/record/offer/${offer.id}`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch records");
      }
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      console.log("something went wrong");
    }
  }, [offer.id]);

  useEffect(() => {
    if (offer.id) {
      getRecords();
    }
  }, [offer.id, getRecords]);

  return (
    <div className="rounded-xl bg-[#e0fbfc] shadow-md m-8 pb-4 min-w-[50%] hover:scale-105 transition-[0.4s]">
        {offer && (
        <>
            <h2 className="text-2xl font-bold p-4">
            Recent reservations for Offer {offer.id}
            </h2>
            {records.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {records.map((record) => (
                <div key={record.id} className="p-4 rounded-lg">
                    <Record record={record} />
                </div>
                ))}
            </div>
            ) : (
            <div className="text-center p-4">
                <p>No records found</p>
            </div>
            )}
        </>
        )}
    </div>
    
  );
};

export default OfferRecords;
