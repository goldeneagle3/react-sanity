import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer__left">
          <h1 className="logo">Orta Saha</h1>
          <h3 className="subtitle">İçerikler ağırlıkla Türk Futbolu hakkında olacaktır.</h3>
          <div className="iletisim">
          <h4>İletişim Hattı</h4>
          <p> ortasaha614@gmail.com</p>
          </div>
      </div>
      <div className="footer__right">
          <h2>Takip Edilen Yabancı Takımlar</h2>
          <ul className="footer-content">
            <li className="footer-item">FC Barcelona</li>
            <li className="footer-item">Ajax</li>
            <li className="footer-item">Manchester City</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h3> Made by Orta Saha &copy; </h3>
      </div>
      
    </div>
  )
}

export default Footer
