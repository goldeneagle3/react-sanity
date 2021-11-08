import React , {useState} from 'react'
import {Link , NavLink} from 'react-router-dom'

import './Navbar.css'

const Navbar = ({click}) => {
  const [navbar, setNavbar] = useState(false)

  const changePosition = () => {
    if (window.scrollY >= 80 ){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changePosition);

  return (
    <nav className={navbar ? "navbar scroll" : "navbar"} >
      <Link to="/" className="navbar__logo">
        Orta Saha
      </Link>
      <ul className="navbar__menu">
        <li >
          <NavLink to="/takimlar" activeClassName="active" className="navbar__links"  >Takımlar <span><i class="fas fa-users"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/musabakalar" activeClassName="active" className="navbar__links">Müsabakalar <span><i class="fas fa-calendar-alt"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/oyuncular" activeClassName="active" className="navbar__links">Oyuncular <span><i class="fas fa-running"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/kulup" activeClassName="active" className="navbar__links">Kulüp <span><i class="far fa-building"></i></span> </NavLink>
        </li>
      </ul>

      <div className="navbar__hamburger" onClick={click}>
        {/* ball icon */}
        <i class="fas fa-futbol"></i>
      </div>
      
    </nav>
  )
}

export default Navbar
