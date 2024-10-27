"use client";
import Link from "next/link";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    
    const handleLogin = async (event)=>{
        event.preventDefault();
        // const newUser={
          
        const  email =  event.target.email.value;
       const  password = event.target.password.value;
       const resp = await signIn('credentials',{
        email,password,
        redirect: false
       });
       console.log(resp);
       if(resp.status===200){
        router.push('/')
       }
        
      }

    return (
        <div>
           <div className=" border-2 p-5 w-80 mx-auto">
            <p className="w-20 mb-5 mx-auto text-xl font-semibold">Sign In</p>
           
           <form onSubmit={handleLogin} action="">
           <div>
            <h1>Email</h1>
           <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           </div>

           <div>
            <h1>Password</h1>
           <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           </div>

           <button type="submit" className="btn w-full mt-5 mb-5">Login</button>
           </form>

           <div>
            <Link href={'/signup'} className="btn">Sign Up</Link>
           </div>
          

         

           </div>

        </div>
    );
};

export default page;