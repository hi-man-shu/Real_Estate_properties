import React from 'react';
import logo from '../images/logo.png';

function Navbar(){
     return(
         <nav>
             <a href='0' className = 'logo'>
                 <img src={logo} alt='logo'/>
             </a>
         </nav>
         
     )
}

export default Navbar;