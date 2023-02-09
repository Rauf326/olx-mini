import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase'; 
const Registration = () => {
 const [Values, setValues] = useState({
  name: "",
  email: "",
  pass: "",
 }) 

 const login =()=>{
  if(!Values.name){
    alert("Please Fill the Name")
  }
  else if(!Values.email ){
    alert("Please Fill The Email")
  }
  else if(!Values.pass ){
    alert("Please Fill The Password") 
  }
  createUserWithEmailAndPassword(auth,Values.email,Values.pass).then((res)=>{
    console.log("res",res)
    window.location=("/signin")
  }
  ).catch(error => console.log("Error"))
 };


 
 
  return (
    <>
         
         <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">Registration Form</h2>
          
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
              <input type="text" className="form-control border border-primary" 
                onChange={(e)=> setValues((prev)=>({...prev, name: e.target.value}))}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control border border-primary"
              onChange={(e)=> setValues((prev)=>({...prev, email: e.target.value}))}
               />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control border border-primary" 
                onChange={(e)=> setValues((prev)=>({...prev, pass: e.target.value}))}
              />
            </div>
            
          
          <button onClick={()=>login()} className="btn btn-primary">Register</button>
          <div className="mt-3">
            <p className="mb-0  text-center">Don't have an account?
             <Link to="/signin"  className="text-primary fw-bold">Login</Link></p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Registration