import React from "react";
import Logo from "../../assets/Marvel-Logo.png";

import './header.css'

const Header = () => (
  <div className='marvel-pic'>
    <img src={Logo} alt='marvel-logo'/>
  </div>
)

export default Header;