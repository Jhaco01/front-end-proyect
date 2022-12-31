import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../features/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IUser } from '../../models/models';
import './LogIn.scss'

export const LogIn = () => {

const alertRef = useRef<HTMLDivElement>(null);
const spinnerRef = useRef<HTMLDivElement>(null);

const [userInfo, setUserInfo] = useState<IUser>({
    name: '',
    password: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    
    setUserInfo(prevState => ({
        ...prevState,
        [name] : value
    }))

}

const [formWasSubmitted, setFormWasSubmitted] = useState(false);

const {err} = useAppSelector(state => state.users);
const dispatch = useAppDispatch();

const navigate = useNavigate();

useEffect(()=>{

    if (err) {
        
        alertRef.current?.classList.remove('d-none');
        
        setTimeout(() => {
            spinnerRef.current?.classList.add('d-none');
            setFormWasSubmitted(false);
        },1000);

    } else {

        alertRef.current?.classList.add('d-none');
        spinnerRef.current?.classList.add('d-none');

        if (formWasSubmitted) {
            navigate('/'); 
            setFormWasSubmitted(false)
        }

    }

},[formWasSubmitted])

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    spinnerRef.current?.classList.remove('d-none');

    dispatch(logIn(userInfo));

}
  
return (
    <>
        <header className="login-header"> <p className="display-3 p-2 ms-5">Log In</p> </header>

        <div className="container form-div mt-5">

            <div ref={alertRef} className='alert alert-warning d-flex align-items-center d-none' role={'alert'} >
                <p>Please check the username and password are correct...</p>
            </div>

            <form onSubmit={(e)=>{
                handleSubmit(e);
                setFormWasSubmitted(true);
            }}>

                <div className="m-5">
                    <label htmlFor="nameInput" className='display-6 mb-4'> Username or email </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='name'
                        placeholder='username or name@example.com'
                        value={userInfo.name}
                        onChange={(e)=>{handleChange(e)}}
                    />
                </div>

                <div className="m-5">
                    <label htmlFor="nameInput" className='display-6 mb-4'> Password </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name='password'
                        placeholder='Password'
                        value={userInfo.password}
                        onChange={(e)=>{handleChange(e)}}
                    />
                </div>

                <button className="btn btn-lg ms-5"> Log In </button>

            </form>

            <div ref={spinnerRef} className="spinners d-none">

                <div className="spinner-grow" role="status"></div>
                <div className="spinner-grow" role="status"></div>
                <div className="spinner-grow" role="status"></div>

            </div>

        </div>
    </>
  )
}
