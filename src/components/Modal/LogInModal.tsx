import './LogInModal.scss'
import { useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import { SharedLayoutContext } from '../../pages/SharedLayout/SharedLayout'

export const LogInModal = () => {

    const {showModal, handleCloseModal} = useContext(SharedLayoutContext)
    
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Hello there!</Modal.Title>
    </Modal.Header>
    <Modal.Body>Please log in to add this product to your cart.</Modal.Body>
    <Modal.Footer>      
      <Link 
          to={`/log%20in`} 
          className='btn btn-modal'
      > Log In </Link>      
    </Modal.Footer>
  </Modal>
  )
}
