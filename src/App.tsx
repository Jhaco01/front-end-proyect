import './App.css';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';
import { MainPage } from './pages/MainPage/MainPage';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProductsList } from './features/productsSlice';
import { getCategoriesList } from './features/categoriesSlice';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/LogIn/LogIn';
import { updateUserCart } from './features/usersSlice';
import { LogOut } from './pages/Logout/LogOut';
import { SingleProductPage } from './pages/SingleProductPage/SingleProductPage';
import { Product } from './models/models';
import { ResultsPage } from './pages/ResultsPage/ResultsPage';


function App() {

  const dispatch = useAppDispatch();  
  const {currentUser} = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(getProductsList(''));
    dispatch(getCategoriesList(''));
  }, []);

  useEffect(()=>{
    dispatch(updateUserCart(currentUser));
  },[currentUser.cart])

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/results/:search' element={<ResultsPage />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/products/:productId' element={<SingleProductPage />} />
        </Route>
        <Route path='/log%20in' element={<LogIn />} />
        <Route path='/sign%20up' element={<SignUp />} />
        <Route path='/log%20out' element={<LogOut />} />        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
