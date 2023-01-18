import './OffCanvas.scss';
import { useContext } from "react";
import { Offcanvas } from "react-bootstrap"
import { useAppSelector } from "../../hooks";
import { SharedLayoutContext } from "../../pages/SharedLayout/SharedLayout";
import { CartItem } from "../CartItem/CartItem";
import { useNavigate } from 'react-router-dom';

export const OffCanvas = () => {  

  const navigate = useNavigate();

  const {currentUser, isLoggedIn} = useAppSelector(state => state.users);

  const {cart} = currentUser;  

  const {showOffCanvas,handleCloseOffCanvas} = useContext(SharedLayoutContext);

  let moneyAmmount = 0;

  for (const item of cart) {
    moneyAmmount+= item.price * item.quantity;
  }

  return (
    <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{
         isLoggedIn ?
         <>
          {cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)}
          <button className="btn pay-btn btn-lg position-absolute bottom-0 mb-5 ms-4" onClick={()=>{navigate('/thanks'); handleCloseOffCanvas()}}>
              Pay {`${moneyAmmount.toFixed(2)}`}$
          </button>
         </>
            :
         <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="mt-5 display-6 text-center">Log in to watch your products</p>
          <button className="btn offcanvas-btn btn-lg" onClick={()=>{navigate('/log%20in')}}>
              Log In
          </button>         
         </div>

        }
        </Offcanvas.Body>
    </Offcanvas>
  )
}
