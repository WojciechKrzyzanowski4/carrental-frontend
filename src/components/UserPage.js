import React, {useEffect} from 'react'
import CustomDatePicker from './reservation/CustomDatePicker';

function UserPage() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
    }, []);

    return(
        <div className="pt-16">
        <h1>this is the user page</h1>
        <CustomDatePicker/>
       
    </div>
    );
}
export default UserPage;