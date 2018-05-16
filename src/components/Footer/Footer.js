import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="d-flex bd-highlight justify-content-around flex-wrap">
          <div className="p-2 flex-fill bd-highlight">
            <h2>Doroshev Yerkebulan</h2>
            <h6>Web-developer, UI-designer, ReactJS</h6>
          </div>

          <div className="p-2 flex-fill bd-highlight">
            <h5>Links:</h5>
            <a href="https://www.instagram.com/y.e.r.k.e/"><FontAwesome.FaInstagram size={60} /></a>
            <a href="https://github.com/YerkebulanDoroshev"><FontAwesome.FaGithub size={60} /></a>
            <a href="https://www.linkedin.com/in/yerkebulan"><FontAwesome.FaLinkedin size={60} /></a>
          </div>
        </div>
        <h6>Almaty, Kazakhstan</h6>
        <p>2016 - {(new Date().getFullYear())}</p>
      </footer>
    </div>
  )
}
export default Footer;