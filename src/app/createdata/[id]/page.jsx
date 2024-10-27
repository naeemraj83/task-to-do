"use client"
import React, { useEffect, useState } from 'react';
import {getServicesDetails} from 
const page = ({params}) => {
    
        const {datas,setData} = useState({});
        const loadData = async()=>{
       const details = await getServicesDetails(params.id)
       setData(details.datas)
        }

    
    const handleCreate=()=>{
    };

    useEffect(()=>{
         loadData()
    },[params])
    return (
        <div>
            <div className=" border-2 p-5 w-80 mx-auto ">
                <form onSubmit={handleCreate} action="">
                <div>
            <h1>Name </h1>
           <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           </div>

           <div>
            <h1>Email</h1>
           <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           </div>

           <button type="submit" className="btn w-full mt-5 mb-5">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default page;