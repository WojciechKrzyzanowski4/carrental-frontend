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
        <div className="pt-40 text-center flex flex-col items-center justify-center">
            {records && records.map((record) => (
                <div className= "border border-slate-900 bg-pink-500 m-5 w-[30vw] rounded-md" key={record.id}>
                    <p> Record date: {record.recordDate}</p>
                    <p> Record status: {record.status}</p>
                </div>
            ))}
        </div>
    )
}

export default History