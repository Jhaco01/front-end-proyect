import './App.css';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './pages/SharedLayout/SharedLayout';
import { MainPage } from './components/MainPage/MainPage';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProductsList } from './features/productsSlice';



function App() {

  const dispatch = useAppDispatch();

  const productList = useAppSelector((state)=>state.products.productsList);  

  useEffect(() => {
    dispatch(getProductsList(0));
  }, [])

  console.log(productList);
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
