import { useContext } from "react";
import { Offcanvas } from "react-bootstrap"
import { useAppSelector } from "../../hooks";
import { SharedLayoutContext } from "../../pages/SharedLayout/SharedLayout";
import { CartItem } from "../CartItem/CartItem";

export const OffCanvas = () => {  

  const {cart} = useAppSelector(state => state.users.currentUser)

  const {showOffCanvas,handleCloseOffCanvas} = useContext(SharedLayoutContext);

  return (
    <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{
         cart ?
          cart.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
            :
         <p>
           Some text as placeholder. In real life you can have the elements you
           have chosen. Like, text, images, lists, etc.
        </p>         

        }
        </Offcanvas.Body>
    </Offcanvas>
  )
}
