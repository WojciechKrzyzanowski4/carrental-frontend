import React, {useEffect, useState} from 'react'
import { SERVER_URL } from './utilComponents/constant';

const History = () => {

    const [records, setRecords] = useState([]);

    const getRecords = async() => {
        try{
            const response = await fetch(SERVER_URL + "/record", 
            {credentials: "include", method: "GET", redirect:"follow"});
            if(!response.ok){
                console.log("something went wrong with");
            }
           
            const data = await response.json();
            console.log(data)
            setRecords(data);
        }catch(err){
            console.log("fetching the records failed");
        }
    }

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        getRecords();
    },[])


    return (
        <div className="pt-40 text-center">
            {records && records.map((record) => (
                <div key={record.id}>
                    <p> {record.recordDate}</p>
                    <p> {record.status}</p>
                </div>
            ))}
        </div>
    )
}

export default History