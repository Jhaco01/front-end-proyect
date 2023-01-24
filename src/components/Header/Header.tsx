import { Navbar } from './Navbar/Navbar'
import './Header.scss'
import { useAppSelector } from '../../hooks'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveDropdown } from './ResponsiveDropdown/ResponsiveDropdown';

export const Header = () => {

  const navigate = useNavigate()

  const { isLoggedIn } = useAppSelector(state => state.users);

  const categoriesList = useAppSelector( state => state.categories.categoryList )
  const navList = isLoggedIn ? ['log out','my profile'] : ['log in', 'sign up'];

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchValue ? 
      navigate(`/results/${searchValue}`)
    :
      navigate('/');
  }

  const [width, setWIdth] = useState(0);

  useEffect(()=>{
    setWIdth(window.innerWidth);
  },[])

  const isMobile = width < 740;

  return (
    <header id='header'>
      
      <div className="header container-fluid">

        <div className="row main-row">

          {
            !isMobile
              &&
            <div className="col-2 logo">

              <img src="https://www.drupal.org/files/project-images/bootstrap5.jpeg" alt="logo" />

          </div>              
          }          

          <div className={`col-${isMobile ? '11 m-4' : '7'}`}>

            <form onSubmit={handleSubmit} className="row">

              <input 
                type="text" 
                className="form-control search-input" 
                placeholder="search..." 
                value={searchValue}
                onChange={handleChange}
              />

            </form>

            <div className="row"> {

              !isMobile ?

                <Navbar list={categoriesList} home={true} offCanvas={false} />
              :
                <ResponsiveDropdown list={categoriesList} />

            }</div>

          </div>

          <div className={`${ isMobile ? 'col-12' : 'col-3' }`}>

            <Navbar list={navList} home={false} offCanvas={true} />
          
          </div>

        </div>
        
      </div>

    </header>
  )
}
