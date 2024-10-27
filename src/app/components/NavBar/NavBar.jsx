"use client"

import { signOut, useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";
import Link from "next/link";



const NavBar = () => {
   
  const session = useSession()
  console.log(session);


    const navTitle=[  
        {
            title:'home',
            path:'/'
        },
        {
            title:'CreateData',
            path:'/createdata/id'
        },
        {
            title:'ReadData',
            path:'/readdata'
        }
    ]
    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {
        
        
        navTitle.map((item)=>{
            <Link href={item.path} key={item.path}>{item.title}</Link>
        })
    }
    </div>
    <a className="btn btn-ghost text-xl">CRUD Oparetion</a>
  </div>
  <div className="navbar-center hidden lg:flex">
   <div className="flex items-center space-x-4">
   {
        
        
        navTitle.map((item)=>(
            <Link className=" flex gap-5" href={item.path} key={item.path}>{item.title}</Link>
        ))
    }
   </div>
  </div>
  <div className="navbar-end">
    { !session.data?
      <Link href={'/login'} className="btn">Login</Link>:
      <button className="btn" onClick={()=>signOut()}>Logout</button> }
  </div>
</div>

        </div>
    );
};

export default NavBar;