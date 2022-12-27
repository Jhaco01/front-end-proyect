import { useEffect, useReducer } from "react";
import { useAppSelector } from "../../hooks";
import { MenuProductItem } from "../../components/MenuProductItem/MenuProductItem";
import './MainPage.scss'

interface IState {
    start: number;
    end: number;
    currentPage: number;
    totalPages: number;
}

enum EActionType {
  NEXT = 'NEXT',
  PREV = 'PREV',
  SET_TOTAL = 'SET_TOTAL'
}

interface IAction {
  type: EActionType;
  payload: number;
}

const initialState : IState = {
    start: 0,
    end: 3,
    currentPage: 1,
    totalPages: 0
}

const reducer = (state: IState, action: IAction) => {

    switch (action.type) {
        case 'NEXT':
            return {
                ...state,
                start: state.end + 1,
                end: state.end + 4,
                currentPage: state.currentPage + 1                
            };

        case 'PREV':
            return {
                ...state,
                end: state.end - 4,
                start: state.start - 4,
                currentPage: state.currentPage - 1
            };
        case 'SET_TOTAL':
          return{
            ...state,
            totalPages: action.payload,
          }
    
        default:
            return state;
    }

}

export const MainPage = () => {
  
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    const productList = useAppSelector( state => state.products.productsList );

    console.log(productList.length);
    console.log(state.end + 1);

    useEffect(()=>{
      
      const totalPages = Math.round(productList.length / (state.end + 1));

      console.log(totalPages);
      
      dispatch({type: EActionType.SET_TOTAL, payload: totalPages})

    },[productList])

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
        <div className="buttons">
        <button onClick={()=>{
          dispatch({ type: EActionType.PREV, payload: 0 });
        }}>
          {'<'}
        </button>
        <div className="buttons__pages">
          <span className="buttons__pages__current-page">
            {state.currentPage}
          </span>
          <span className="buttons__pages__total-pages">
            {state.totalPages}
          </span>
        </div>
        <button onClick={()=>{
          dispatch({ type: EActionType.NEXT, payload: 0 });
        }}>
          {'>'}
        </button>
      </div>
    </main>
  )
}
