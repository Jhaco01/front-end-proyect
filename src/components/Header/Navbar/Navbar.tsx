import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SharedLayoutContext } from '../../../pages/SharedLayout/SharedLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'


interface Props {
    list: string[];
    home: boolean;
    offCanvas: boolean;
}

const navList = (linkArray:string[]) => {
    return linkArray.map( link => (
        <li className="nav-item" key={link}>
            <NavLink 
                to={`/${link}`} 
                className={({isActive})=>(isActive? 'nav-link active':'nav-link' )}
            > {link.toUpperCase()} </NavLink>
        </li>
    ) )   
}


export const Navbar : React.FC<Props> = ({list,home, offCanvas}) => {

  const [width, setWIdth] = useState(0);

  useEffect(()=>{
    setWIdth(window.innerWidth);    
  },[])

  const isMobile = width < 400 * 165 / 100 ;

  const {handleShowOffCanvas} = useContext(SharedLayoutContext);

    return (
        <nav className="navbar">

            <div className="container-fluid ">

                <ul className={`navbar-nav mb-2${isMobile ? 'd-flex justify-content-evenly' : '' }`}>

                    {                                                     
                        home 
                            &&                    
                        <li className="nav-item" >
                            <NavLink 
                                to={`/`} 
                                className={({isActive})=>(isActive? 'nav-link active':'nav-link' )}
                            > HOME </NavLink>
                        </li>
                    }

                    {
                        navList(list)
                    }

                    {
                        offCanvas 
                            &&                   
                        <li className="nav-item" >
                            {/* <span className="nav-link" onClick={handleShowOffCanvas} >CART</span>*/}
                            <FontAwesomeIcon onClick={handleShowOffCanvas} icon={faShoppingCart} />
                        </li>
                    }

                </ul>

            </div>

        </nav>
    )    
}