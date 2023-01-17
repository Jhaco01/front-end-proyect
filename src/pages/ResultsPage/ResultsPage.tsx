import './ResultsPage.scss';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { ProductPage } from '../ProductPage/ProductPage';
import { Link } from 'react-router-dom';

export const ResultsPage = () => {
  
  const productList = useAppSelector( state => state.products.productsList );

  const {search} = useParams();

  if (!search) return <ProductPage productList={productList} />

  const results = productList.filter( product => (product.title.toLocaleLowerCase()).includes(search.toLocaleLowerCase()) );


  if (results.length !== 0 ) {

    return <ProductPage productList={results} />

  } else {

    return (
        
        <div className='container m-5'>        
            <div className="card result-message">
                <h5 className="card-header">Uh ohh</h5>
                <div className="card-body">
                    <h5 className="card-title">There is no results for your search</h5>
                    <p className="card-text">Try with other words or get back to homepage.</p>
                    <Link to={'/'} className="btn">Go home</Link>
                </div>
            </div>
        </div>)
  
  }

}
