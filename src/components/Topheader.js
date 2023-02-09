import React from 'react'
import { Link } from 'react-router-dom'
const Topheader = () => {
  return (
   <>
 
 <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-xs navbar-expand-md bg-light">
        <div className="container">
          <Link className="navbar-brand me-4 " to="/">
            <img src="./images/OlxBlue.png" alt="" width={34}/>
          </Link>
          
            <ul className="navbar-nav d-flex d-inline-block me-auto px-2">
            <Link to="*" className='nav-link'>
           <li className='me-2 '>
           <i className="fa fa-car me-1"></i>
                Motor
           </li>
           </Link>

           <Link to="*" className='nav-link'>
           <li>
           <i className="fa fa-building me-1"></i>
                Property
           </li>
           </Link>
            </ul>
            
        </div>
      </nav>
   </>
  )
}

export default Topheader;