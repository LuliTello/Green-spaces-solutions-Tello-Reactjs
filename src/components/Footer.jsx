import React from 'react';
import './Footer.css';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
        <p className="footer__title">Green Spaces Solutions</p>
        <p className="footer__text">Copyright &copy; 2022. All rights reserved</p>
        <div className="footer__icons">
            <a href="https://es-la.facebook.com/" className="icon_facebook">
                <Facebook size={25}/>
            </a>
            <a href="https://instagram.com" className="icon_instagram">
                <Instagram size={25}/>
            </a>
            <a href="https://www.linkedin.com/home" className="icon_linkedin">
                <Linkedin size={25}/>
            </a>
        </div>
    </footer>
    </div>
  )
}
