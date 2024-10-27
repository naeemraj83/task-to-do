"use client"
const page = () => {

  const handleSignUp = async (event)=>{
    event.preventDefault();
    const newUser={
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }
    // console.log(newUser);
    const resp= await fetch("http://localhost:3000/signup/api",{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type":"application/json"
      }
    })
    console.log(resp);
    if(resp){
      event.target.reset()
    }
  }




  return (
    <div>
      <div className="border-2 p-5 w-80 mx-auto">
      <p className="w-20 mb-5 mx-auto text-xl font-semibold">Sign Up</p>
       <form onSubmit={handleSignUp}>
       <div>
          <h1>User Name</h1>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <h1>email</h1>
          <input
            type="email"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div>
          <h1>Password</h1>
          <input
            type="text"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button type="submit" className="btn w-full mt-5 mb-5">Sign Up</button>
       </form>
      </div>
    </div>
  );
};

export default page;
