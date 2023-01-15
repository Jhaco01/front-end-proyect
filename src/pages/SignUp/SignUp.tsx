import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../features/usersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { IUser } from '../../models/models'
import './SignUp.scss'

export const SignUp = () => {

  const navigate = useNavigate();

  const alertRef = useRef<HTMLDivElement>(null);
  const existingUserAlertRef = useRef<HTMLDivElement>(null);

  const {err} = useAppSelector(state => state.users)
  const dispatch = useAppDispatch();

  const [newUser, setNewUser] = useState<IUser>({
    name: '',
    userName: '',
    email: '',
    cart: [],
    password: ''
  })  
  const [confirmationPassword, setConfirmationPassword] = useState<string>('');
  const [verifiedForm, setVerifiedForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setNewUser(prevState => ({
      ...prevState,
      [name] : value
    }))

  }

  const confirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmationPassword(e.target.value);
  }


  const validateEmail = (mail: string) => {
    const rgexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    return rgexEmail.test(mail);
  }

  useEffect(()=>{   

    if (err) {
        existingUserAlertRef.current?.classList.remove('d-none');     
    }  else if (verifiedForm) {
        navigate('/');
    }

  },[err, verifiedForm])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();    

    setVerifiedForm(false);

    if (newUser.name.trim().length === 0) {alertRef.current?.classList.remove('d-none'); return;}
    if ((!newUser.email) || (newUser.email.trim().length === 0)) {alertRef.current?.classList.remove('d-none'); return;}
    if (!validateEmail(newUser.email)) {alertRef.current?.classList.remove('d-none'); return;}
    if ((!newUser.userName) || (newUser.userName.trim().length === 0)) {alertRef.current?.classList.remove('d-none'); return;}
    if ((!newUser.password) || (newUser.password.trim().length === 0)) {alertRef.current?.classList.remove('d-none'); return;}
    if (newUser.password !== confirmationPassword) {alertRef.current?.classList.remove('d-none'); return;}

    setVerifiedForm(true);
    dispatch(signUp(newUser));        

  }

  return (
    <>

      <header className="signup-header"> <p className="display-3 p-2 ms-5">Sign Up</p> </header>
      
      <div className="container form-div">

        <div ref={alertRef} className='alert alert-warning d-flex align-items-center m-2 d-none' role={'alert'} >
            <p>All fields should be fullfilled... Remember write a valid @email and match your password confirmation</p>
        </div>

        <div ref={existingUserAlertRef} className='alert alert-warning d-flex align-items-center m-2 d-none' role={'alert'} >
            <p>Username or email is already registered</p>
        </div>

        <form onSubmit={ e => {          
          handleSubmit(e)                    
        }}>          

          <div className="ms-5 me-5 mt-2">
              <label htmlFor="nameInput" className='display-6 mb-4'> Name </label>
              <input 
                  type="text" 
                  className="form-control"                 
                  placeholder='Your name'
                  name='name'
                  value={newUser.name} 
                  onChange={handleChange}                                 
                />
          </div>
          <div className="m-5">
              <label htmlFor="nameInput" className='display-6 mb-4'> Email </label>
              <input 
                  type="email" 
                  className="form-control"                 
                  placeholder='example@example.com'                
                  name='email'
                  value={newUser.email}
                  onChange={handleChange}
                />
          </div>
          <div className="m-5">
              <label htmlFor="nameInput" className='display-6 mb-4'> Username </label>
              <input 
                  type="text" 
                  className="form-control"                 
                  placeholder='Username'                
                  name='userName'
                  value={newUser.userName}
                  onChange={handleChange}
                />
          </div>
          <div className="m-5">
              <label htmlFor="nameInput" className='display-6 mb-4'> Password </label>
              <input 
                  type="password" 
                  className="form-control"                 
                  placeholder='Password' 
                  name='password'               
                  value={newUser.password}
                  onChange={handleChange}
                />
          </div>
          <div className="m-5">
              <label htmlFor="nameInput" className='display-6 mb-4'> Confirm password </label>
              <input 
                  type="password" 
                  className="form-control"                 
                  placeholder='Password' 
                  value={confirmationPassword}
                  onChange={confirmPassword}               
                />
          </div>          

          <button type='submit' className="btn btn-lg ms-5 mb-3"> Start shopping </button>

        </form>

      </div>
    </>
  )
}
