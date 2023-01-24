import './ResponsiveDropdown.scss'
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

interface Props {
    list: string[];
}

const navList = (linkArray:string[]) => {
    return linkArray.map( link => (
        <li className="nav-item" key={link}  style={{'height': '5.5vh','textAlign':'center'}}>
            <NavLink 
                to={`/${link}`} 
                className={({isActive})=>(isActive? 'nav-link active':'nav-link' )}
            > {link.toUpperCase()} </NavLink>
        </li>
    ) )   
}

export const ResponsiveDropdown : React.FC<Props> = ({list}) => {
    return (    
        <Dropdown className='mt-4'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{'width':'100%'}}>
                CATEGORIES
            </Dropdown.Toggle>
    
            <Dropdown.Menu style={{'width':'100%'}} >                           
                <li className="nav-item" style={{'height': '5.5vh','textAlign':'center'}} >
                    <NavLink 
                        to={`/`} 
                        className={({isActive})=>(isActive? 'nav-link active':'nav-link' )}
                    > HOME </NavLink>
                </li>
                
                { 
                    navList(list)
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
