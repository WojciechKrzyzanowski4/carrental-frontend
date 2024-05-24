import React, { useEffect } from "react";
import User from "./user/User";
import Alert from "./utilComponents/Alert";
import { useState } from "react";
import { SERVER_URL } from "./utilComponents/constant";
import Record from "./record/record";
import { useCallback } from "react";

function UserPage({ user }) {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("all good");
  const [records, setRecords] = useState([]);

  const getRecords = useCallback(async () => {
    try {
      const response = await fetch(`${SERVER_URL}/record/user/${user.id}`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch records");
      }
      const data = await response.json();
      setRecords(data);
    } catch (error) {
      setMessage("operation failed");
      handleShowAlert();
    }
  }, [user.id]);

  useEffect(() => {
    if (user.id) {
      getRecords();
    }
    setShowAlert(false);
  }, [user.id, getRecords]);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="pt-16 text-center">
      <div className="rounded-xl bg-[#e0fbfc] shadow-md m-8 pb-4">
        <h2 className="text-2xl font-bold p-4">Your Recent Reservations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user &&
            records.map((record) => (
              <div key={record.id} className="p-4 rounded-lg">
                <Record record={record} />
              </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="p-4">
          <div className="bg-[#253237] h-[400px] md:h-full rounded-xl shadow-md"></div>
        </div>
        <div className="p-4">
          <User user={user} />
        </div>
      </div>
      {showAlert && (
        <Alert message={message} onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
}
export default UserPage;
