import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    console.log(createUser);

    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        

        const {email,password,...userProfile}=Object.fromEntries(formData.entries());
        console.log(email,password ,userProfile);

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-semibold">SignUp Now</h1>
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="NAME" />
              <label className="label">Address</label>
              <input type="text" name="address" className="input" placeholder="Address" />
              <label className="label">Phone</label>
              <input type="email" name="phone" className="input" placeholder="phone number" />
              <label className="label">Photo</label>
              <input type="Photo" name="photo" className="input" placeholder="Photo Url" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button  className="btn btn-neutral mt-4">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
