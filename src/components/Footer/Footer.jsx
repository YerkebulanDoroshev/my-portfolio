import React from 'react'
import * as FontAwesome from 'react-icons/lib/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="d-flex bd-highlight justify-content-around flex-wrap">
          <div className="p-2 flex-fill bd-highlight">
            <p className="owner-name">Doroshev Yerkebulan</p>
            <p className="owner-description">Web-developer, UI-designer, ReactJS</p>
          </div>

          <div className="p-2 flex-fill bd-highlight links">
            <a 
              href="https://www.instagram.com/yerkeboolean/" 
              target="_blank" 
              rel="noopener noreferrer">
                <FontAwesome.FaInstagram size={60} />
            </a>
            <a 
              href="https://github.com/yerkeboolean" 
              target="_blank" 
              rel="noopener noreferrer">
                <FontAwesome.FaGithub size={60} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yerkebulan" 
              target="_blank" 
              rel="noopener noreferrer">
                <FontAwesome.FaLinkedin size={60} />
            </a>
            <a 
              href="https://t.me/Doroshev" 
              target="_blank" 
              rel="noopener noreferrer">
                <FontAwesome.FaPaperPlane size={60} />
            </a>
          </div>
        </div>
        <p className="city-name">Almaty, Kazakhstan</p>
        <p className="years-of-living">{(new Date().getFullYear())}</p>
      </footer>
    </div>
  )
}
export default Footer;