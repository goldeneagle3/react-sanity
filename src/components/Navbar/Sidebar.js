import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sidebar.css'

const Sidebar = ({show,click}) => {
  const sliderShow = ["sidebar"];

  if (show) {
    sliderShow.push("show")
  }

  return (
    <div className={sliderShow.join(" ")}>
      <ul className="side__menu" onClick={click}>
        <li>
          <NavLink to="/takimlar" activeClassName="active-mobil" className="navbar__link" >Takımlar <span><i class="fas fa-users"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/musabakalar" activeClassName="active-mobil" className="navbar__link">Müsabakalar <span><i class="fas fa-calendar-alt"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/oyuncular" activeClassName="active-mobil" className="navbar__link">Oyuncular <span><i class="fas fa-running"></i></span></NavLink>
        </li>
        <li>
          <NavLink to="/kulup" activeClassName="active-mobil" className="navbar__link">Kulüp <span><i class="far fa-building"></i></span> </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
