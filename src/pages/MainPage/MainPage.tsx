import { useAppSelector } from "../../hooks";
import './MainPage.scss'
import { ProductPage } from "../ProductPage.tsx/ProductPage";

export const MainPage = () => {
  
  const productList = useAppSelector( state => state.products.productsList );        
  
  return <ProductPage productList={productList} />

}
