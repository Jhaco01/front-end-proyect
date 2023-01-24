import './ProductPage.scss'
import { MenuProductItem } from '../../components/MenuProductItem/MenuProductItem';
import { usePagesReducer } from '../../hooks';
import { Product } from '../../models/models'
import { useEffect, useState } from 'react';

interface Props {
    productList: Product[];
}

export const ProductPage : React.FC<Props> = ({productList}) => {    

    const [width, setWidth] = useState(0);

    useEffect(()=>{
      setWidth(window.innerWidth);
    },[])
        
    const {state,next,prev} = usePagesReducer(productList,width);
    
    const sliceProductList = productList.slice( state.start, state.end + 1 );    

    const renderProducts = () => (
        sliceProductList.map( item => 
                <MenuProductItem 
                    key={item.id}  
                    {...item}    
                />
            )
    )    
  
  return (
    <main>        

        <section>
            <div className="section">
                {
                    renderProducts()
                }
            </div>
        </section>
        <div className="buttons mt-3">

        {

        state.currentPage > 1
            &&          
        <button className="btn" onClick={()=>{
            prev();
          }}>
          {'<'}
        </button>
        
        }
        <div>
          <span className="btn btn-outline-secondary">
            {state.currentPage} of {state.totalPages}
          </span>          
        </div>

        {

        state.currentPage < state.totalPages 
          &&  
        <button className="btn" onClick={()=>{
            next();
          }}>
          {'>'}
        </button>
        }
      </div>
    </main>
  )
}
