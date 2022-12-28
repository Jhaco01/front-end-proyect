import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { ProductPage } from '../ProductPage.tsx/ProductPage';

export const CategoryPage = () => {

  const productList = useAppSelector( state => state.products.productsList );        

  const {category} = useParams();

  const categoryProducts = productList.filter( product => product.category === category);
  
  return <ProductPage productList={categoryProducts} />
}
