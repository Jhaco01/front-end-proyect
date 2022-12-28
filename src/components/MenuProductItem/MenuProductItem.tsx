import { Link } from 'react-router-dom'
import { Product } from '../../models/models'
import './MenuProductItem.scss'

export const MenuProductItem : React.FC<Product> = ({id, title, price, description, category, image, rating}) => {
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
                      <Link to={'/'} className='btn btn-lg ms-3' > Details </Link>
                      <button className='btn btn-lg ms-3'> Add to cart </button>
                  </div>
              </div>
          </div>
      </article>
    )
  }