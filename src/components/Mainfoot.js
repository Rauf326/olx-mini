import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Mainfoot = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-area mt-5" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="contact-content text-center">
                                    <NavLink to="/"><img className="footimg" src="./images/whitelogo.png" alt="logo" /></NavLink>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                                    <div className="hr" />
                                    <h6>1120 University of Karachi near Safoora Karachi</h6>
                                    <h6>raufiqbal326@gmail.com<span><strong>|</strong></span>Contact No: 0344-2547120</h6>
                                    <div className="contact-social">
                                        <ul>
                                            <li><a className="hover-target" href="https://www.facebook.com/" target='_blank' rel="noreferrer"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a className="hover-target" href="https://www.linkedin.com/in/rauf-iqbal-0a0b07204/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a className="hover-target" href="https://github.com/Rauf326" target='_blank' rel="noreferrer"><i className="fab fa-github" /></a></li>
                                            <li><a className="hover-target" href="https://www.instagram.com/innocentrauf/" target='_blank' rel="noreferrer"><i className="fab fa-instagram" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <p>Copyright © 2022 <img src="./images/whitelogo.png" alt="logo" /> All Rights Reserved by Rauf Iqbal.</p>
                </footer>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
.footimg {
    max-width: 100%;
    height: auto;
  }
  
  section {
    padding: 60px 0;
    /* min-height: 100vh;*/
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .contact-area {
    border-bottom: 1px solid #353C46;
  }
  
  .contact-content p {
    font-size: 15px;
    margin: 30px 0 60px;
    position: relative;
  }
  
  .contact-content p::after {
    background: #353C46;
    bottom: -30px;
    content: "";
    height: 1px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: 80%;
  }
  
  .contact-content h6 {
    color: #8b9199;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  
  .contact-content span {
    color: #353c47;
    margin: 0 10px;
  }
  
  .contact-social {
    margin-top: 30px;
  }
  
  .contact-social>ul {
    display: inline-flex;
  }
  
  .contact-social ul li a {
    border: 1px solid #8b9199;
    color: #8b9199;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
    transition: 0.4 linear;
  }
  
  .contact-social ul li a:hover {
    border: 2px solid rgb(63, 43, 179);
    color: white;
  }
  
  .fab {
    color: white;
  }
  
  .contact-content img {
    max-width: 210px;
  }
  
  section,
  footer {
    background: #1A1E25;
    color: #868c96;
  }
  
  footer p {
    padding: 40px 0;
    text-align: center;
  }
  
  footer img {
    width: 44px;
  }
  strong{
    color:white;
  }
`

export default Mainfoot;