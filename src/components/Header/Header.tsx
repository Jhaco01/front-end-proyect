import { Navbar } from './Navbar/Navbar'
import './Header.scss'
import { useAppSelector } from '../../hooks'

export const Header = () => {

  const categoriesList = useAppSelector( state => state.categories.categoryList )
  const navList = ['Log in', 'Sign in', 'cart']

  return (
    <header>
      
      <div className="header container-fluid">

        <div className="row main-row">

          <div className="col-2 logo">

              <img src="https://www.drupal.org/files/project-images/bootstrap5.jpeg" alt="logo" />

          </div>

          <div className="col-7">

            <div className="row">

              <input type="text" className="form-control search-input" placeholder="search" />

            </div>

            <div className="row">

              <Navbar list={categoriesList} />

            </div>

          </div>

          <div className="col-3">

            <Navbar list={navList}/>
          
          </div>

        </div>
        
      </div>

    </header>
  )
}