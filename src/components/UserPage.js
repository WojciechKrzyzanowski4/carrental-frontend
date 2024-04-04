import React, {useEffect} from 'react'
import User from './user/User';
import Invoice from './utilComponents/Invoice';


function UserPage() {

    useEffect(()=>{
        document.body.style.overflow = 'visible';
    }, []);

    return(
        <div className="pt-16 text-center">
            <div className="rounded-xl bg-[#e0fbfc] shadow-md m-8 h-[400px]">
            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                <div className="p-4">
                    <div className="bg-[#253237] h-[400px] md:h-full rounded-xl shadow-md">

                    </div>

                </div>
                <div className="p-4">
                    <User/>
                </div>
            </div>
            <Invoice/>
        </div>
    );
}
export default UserPage;