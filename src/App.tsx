import './App.css';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';
import { MainPage } from './pages/MainPage/MainPage';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { getProductsList } from './features/productsSlice';
import { getCategoriesList } from './features/categoriesSlice';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { LogIn } from './pages/LogIn/LogIn';
import { SignIn } from './pages/SignIn/SignIn';



function App() {

  const dispatch = useAppDispatch();  

  useEffect(() => {
    dispatch(getProductsList(''));
    dispatch(getCategoriesList(''));
  }, [])

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/:category' element={<CategoryPage />} />
        </Route>
        <Route path='/log%20in' element={<LogIn />} />
        <Route path='/sign%20in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
