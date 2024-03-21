import React, {useEffect} from 'react'


function UserPage() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
    }, []);

    return(
        <div className="pt-16">
        <h1>this is the user page</h1>
       
    </div>
    );
}
export default UserPage;