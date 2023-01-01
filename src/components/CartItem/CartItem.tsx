import { addToCart, removeFromCart } from '../../features/usersSlice';
import { useAppDispatch } from '../../hooks';
import { Product } from '../../models/models';
import './CartItem.scss';

export const CartItem : React.FC<Product> = (Props) => {

    const {id, image, title, quantity, price} = Props;

    const dispatch = useAppDispatch();

    const handleRemoveClick = () => {
        dispatch(removeFromCart(id));
    }
    
    const handleAddClick = () => {
        dispatch(addToCart(Props));
    }

  return (
    <article className='card cart-card m-2'>
          <div className="row article">
              <div className="col-3 img">
                  <img src={image} className="card-image rounded-start" alt="product" />
              </div>
              <div className="info col-9">
                  <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title"> {title} </h5>
                      <div className="buttons d-flex flex-row justify-content-center align-items-center">

                        <button className='btn me-4' onClick={handleRemoveClick}> - </button>
                        <p className='mt-3'> {quantity} </p>
                        <button className='btn ms-4' onClick={handleAddClick} > + </button>
                      
                      </div>
                      <p className='btn btn-outline-secondary mt-1 price'> {price*quantity} $ </p>
                  </div>
              </div>
          </div>
      </article>
  )
}
