import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoSnapchat } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div>
    <div className="footer-clean">
    <footer>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Hosting</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Legacy</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                    <h3>Careers</h3>
                    <ul>
                        <li><a href="#">Job openings</a></li>
                        <li><a href="#">Employee success</a></li>
                        <li><a href="#">Benefits</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 item social">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><IoLogoTwitter /></a>
                    <a href="#"><IoLogoSnapchat /></a>
                    <a href="#"><BsInstagram /></a>
                    <p className="copyright"> © keyur kanpariya</p>
                </div>
            </div>
        </div>
    </footer>
</div>
    </div>
  )
}

export default Footer