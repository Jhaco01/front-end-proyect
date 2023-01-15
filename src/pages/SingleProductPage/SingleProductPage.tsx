import './SingleProductPage.scss';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Product } from '../../models/models'
import { useContext } from 'react';
import { SharedLayoutContext } from '../SharedLayout/SharedLayout';
import { addToCart } from '../../features/usersSlice';

export const SingleProductPage = () => {

  const {productId} = useParams();
  
  const {productsList} = useAppSelector(state=>state.products)

  let product : Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {rate: 0, count: 0 },
    quantity: 0
  };

  if (productId) {
    const foundProduct = productsList.find(product => product.id === parseInt(productId));
    
    if (foundProduct) {
      product = foundProduct;
    }

  }

  const {image, title, description, price} = product;

  const { isLoggedIn } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();
    
    const { handleShowModal } = useContext(SharedLayoutContext);
    const handleAddClick = () => {

        if (isLoggedIn) {
            dispatch(addToCart(product));            
        } else {
            handleShowModal();
        }

    }

  return (
    <section className='container card mt-5' style={{borderColor:'purple'}}>
        <div className="product-div d-flex row">          
            <div className="image col-4 mt-5">
                <img src={image} alt="" />
            </div>
            <div className="info-div d-flex flex-column col m-5 justify-content-evenly">
              <div className="product-info d-flex flex-column">
                <h2 className="title mb-4"> {title} </h2>
                <p className="description"> {description} </p>
                <p className="price align-self-end me-5 mt-5"> {price}$ </p>
              </div>
              <button className='btn btn-lg product-btn' onClick={handleAddClick}> Add to cart </button>
            </div>          
        </div>
    </section>
  )
}
