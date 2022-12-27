import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

interface Props {
    list: string[];
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


export const Navbar : React.FC<Props> = ({list}) => {
  return (
    <nav className="navbar">

        <div className="container-fluid">

            <ul className="navbar-nav mb-2">

                {
                    navList(list)
                }

            </ul>

        </div>

    </nav>
  )
}
