import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
function Header(){
    return (
        <div>
          <nav>
              <h3>Olu Dada's Portfolio</h3>
              <ul className= 'nav-links'>
                  <Link to ='/'>
                      <li>
                          Home
                      </li>
                  </Link>
                  <Link to ='/About'>
                      <li>
                          About
                      </li>
                  </Link>
                  <Link to ='/Projects'>
                      <li>
                          Projects
                      </li>
                  </Link>
              </ul>
              </nav>  
        </div>
    )
}

export default Header;