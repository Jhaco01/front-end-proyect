import { Product } from "../../../models/Product"
import './MenuProductItem.scss'

export const MenuProductItem : React.FC<Product> = ({id, title, price, description, category, image, rating}) => {
  return (
    <article>
        <div className="article">
            <div className="img">
                <img src={image} />
            </div>
            <div className="info">
                <h4 className="title"> {title} </h4>
                <div className="price">
                    {price}                    
                </div>
            </div>
        </div>
    </article>
  )
}
