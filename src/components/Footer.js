import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
    <div className="container foot mt-5">
        <div className="row ">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                <img src="./images/footerimg.png" className='img-fluid' alt=""  />
            </div>
            <div className="col-lg-3 col-sm-3 col-12 col-md-12">
                <p>get your app</p>
                <Link to="" className='me-1'>
                    <img src="./images/googlee.svg " className='img-fluid' alt="" width={150}/>
                </Link>
                <Link to="">
                    <img src="./images/googlee.svg" className='img-' alt="" width={150}/>
                </Link>
            </div>
        </div>
    </div>
   </>
  )
}

export default Footer