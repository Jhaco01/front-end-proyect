import { useAppSelector } from "../../hooks";
import './MainPage.scss'
import { ProductPage } from "../ProductPage/ProductPage";

export const MainPage = () => {
  
  const productList = useAppSelector( state => state.products.productsList );        
  
  return <ProductPage productList={productList} />

}
