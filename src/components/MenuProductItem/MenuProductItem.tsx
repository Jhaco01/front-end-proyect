import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../../features/usersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Product } from '../../models/models'
import { SharedLayoutContext } from '../../pages/SharedLayout/SharedLayout'
import './MenuProductItem.scss'

export const MenuProductItem : React.FC<Product> = (Props) => {

    const {title, price, image, id} = Props;
    
    const { isLoggedIn } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();
    
    const { handleShowModal } = useContext(SharedLayoutContext);
    const handleAddClick = () => {

        if (isLoggedIn) {
            dispatch(addToCart(Props));            
        } else {
            handleShowModal();
        }

    }

    return (       
      <article className='card m-2'>
          <div className="row article">
              <div className="col-4 img">
                  <img src={image} className="img-fluid rounded-start" alt="product" />
              </div>
              <div className="info col-8">
                  <div className="card-body">
                      <h5 className="card-title"> {title} </h5>
                      <p className="card-text text-end h5">{price}$</p>
                      <Link to={`/products/${id}`} className='btn btn-lg menu-btn ms-3' > Details </Link>                      
                      <button className='btn btn-lg menu-btn ms-3' onClick={handleAddClick}> Add to cart </button>
                  </div>
              </div>
          </div>
      </article>       
    )
  }