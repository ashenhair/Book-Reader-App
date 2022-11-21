import React, { useState } from "react"
import SearchBox from "./SearchBox";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SecretBarData } from "./SecretBarData";




function Navbar() {

  const [secretbar, setSecretbar] = useState(false);

  const showSecretbar = () => setSecretbar(!secretbar);


    return (
      <>
      <div className="navbar">
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars  onClick={showSecretbar}/>
        </Link>
      </div>
      <nav className={secretbar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSecretbar}>
          <li className="navbar-toggle">
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SecretBarData.map((item,index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        </nav>  

    
     <nav className="navbar" >
      
     </nav>
     
      <SearchBox/>
    </>
  );
}

    

      

  
   
  export default Navbar;

 

 
