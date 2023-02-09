import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'; 

const Signin = () => {
  const [Values, setValues] = useState({
    email: "",
    pass: "",
   }) 
  
   const login =()=>{
    if(!Values.email ){
      alert("Please Fill The Email")
    }
    else if(!Values.pass ){
      alert("Please Fill The Password") 
    }
    signInWithEmailAndPassword(auth,Values.email,Values.pass).then((res)=>{
      localStorage.setItem("email",res._tokenResponse.email)
      window.location="/"
    }
    ).catch((error) => {
      console.log("Error",error)
      alert("Something went wrong...")
    })
   };
  console.log(Values)
  return (
    <>
            <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
          <h2 className="text-center mb-4 text-primary">Login</h2>
          
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email"
              onChange={(e)=> setValues((prev)=>({...prev, email: e.target.value}))}
               className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label"
              
              >Password</label>
              <input type="password" className="form-control border border-primary " id="exampleInputPassword1"
              onChange={(e)=> setValues((prev)=>({...prev, pass: e.target.value}))}
               />
            </div>
            <div className="d-grid">
              
            </div>
      
          {/* <button className="btn btn-primary" type="submit"
              onClick={()=>login()}
              >Login</button> */}
              <button onClick={()=>login()} className="btn btn-primary">Login</button>
          <div className="mt-3">
            <p className="mb-0  text-center">Don't have an account?
             <Link to="/registration" className="text-primary fw-bold">Sign
                Up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin