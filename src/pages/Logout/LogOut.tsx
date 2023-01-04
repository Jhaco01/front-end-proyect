import { Link } from 'react-router-dom'
import { logOut } from '../../features/usersSlice';
import { useAppDispatch } from '../../hooks'
import './LogOut.scss'

export const LogOut = () => {
    
    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
    }

  return (
    <>
        <header className="login-header"> <p className="display-3 p-2 ms-5">Log Out</p> </header>
        
        <div className="logout-text mt-5 d-flex flex-column justify-content-center align-items-center">
            
            <h1 className='display-3'>Are you leaving?</h1>
            <h3 className='display-6'>This is your home so comeback</h3>
            <h3 className='display-6' >whenever you want...</h3>
        
        </div>    

        <div className="logout-buttons me-5 mt-5 d-flex justify-content-center align-items-center">

            <Link to={'/'} className="btn btn-lg ms-5"> Go back </Link>
            <Link to={'/'} onClick={handleLogOut} className="btn btn-lg ms-5"> Log Out </Link>

        </div>

    </>
  )
}
