import { useContext } from "react";
import { Offcanvas } from "react-bootstrap"
import { SharedLayoutContext } from "../../pages/SharedLayout/SharedLayout";

export const OffCanvas = () => {

  const {show,handleClose} = useContext(SharedLayoutContext);

  return (
    <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
    </Offcanvas>
  )
}
