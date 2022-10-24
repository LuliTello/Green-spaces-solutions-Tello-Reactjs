import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div>
        <footer className="footer">
        <p className="footer__title">Bullettrain</p>
        <p className="footer__text">Copyright &copy; 2022. All rights reserved</p>
        <div className="footer__icons">
            <a href="https://es-la.facebook.com/" className="icon_facebook">
                <FacebookIcon fontSize="large"/>
            </a>
            <a href="https://instagram.com" className="icon_instagram">
                <InstagramIcon fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com/home" className="icon_linkedin">
                <LinkedInIcon fontSize="large"/>
            </a>
        </div>
    </footer>
    </div>
  )
}
