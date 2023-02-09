import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const logOut = ()=>{
    localStorage.clear();
    window.location = "/"
  }
  return (
    <>
      <Wrapper>
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <div className="container">
            <NavLink className="navbar-brand p-0" to="/">
              <img src="./images/olxblack.png" alt="" width={80} />
            </NavLink>
            <div className="input-group input2">
              <input type="text" className="form-control " placeholder="Recipient's username"
                aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">
                <i className="fa fa-search"></i>

              </span>
            </div>

            <button className="navbar-toggler mt-3 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav d-lg-none d-sm-block d-md-block d-block">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="*">Products</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="*">Features</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active fs-5" aria-current="page" to="/signin">Login</NavLink>
                </li>
                
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    <img src="./images/btn.png" className='position-relative' alt="" width={80} />

                  </NavLink>
                </li>

              </ul>
            </div>
           

            
            <ul className="navbar-nav">
              {localStorage.getItem("email")!==null?
                <>
                <li className="nav-item d-sm-none d-none d-lg-block mt-1">
                <p className='pp nav-link active fs-6"'>{localStorage.getItem("email")}</p>
              </li>
              <li className="nav-item d-sm-none d-none d-lg-block mt-1">
               <NavLink onClick={()=>logOut()} className="nav-link active fs-6" >Logout</NavLink>
              </li>
                </>
                
              
              :
              
               
              <li className="nav-item d-sm-none d-none d-lg-block mt-1">
                <NavLink className="nav-link active fs-6" aria-current="page" to="/signin">Login</NavLink>
              </li>
              }
            
              <li className="nav-item d-sm-none d-none d-lg-block">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <img src="./images/btn.png" className='position-relative' alt="" width={80} />
                </NavLink>
              </li>
            </ul>



          </div>
        </nav>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
.input-group{
  width: 20% !important;
 height: 50px;
 

}
input::placeholder{
  padding: 20px;
}
.form-control:focus {
  box-shadow: 0 0 0 0 black !important;
}

.input-group i{
  left: 8px;
  top: 16px;
  z-index: 1;
  font-size: 18px;
  
}


.input2{
  width: 50% !important;
}
input{
  border: 1px solid black !important;
}
.input2 span{
  background-color: #002f34;
  color: white;
  /* height: 100%; */
  font-size: 18px;
  padding: 12px;
}
`

export default Navbar