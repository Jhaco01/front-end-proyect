import './SharedLayout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { createContext, useState } from 'react';
import { OffCanvas } from '../../components/OffCanvas/OffCanvas';
import { LogInModal } from '../../components/Modal/LogInModal';

interface OffCanvasToggler {
  showOffCanvas: boolean;
  handleCloseOffCanvas: () => void;
  handleShowOffCanvas: () => void;

  showModal: boolean;
  handleCloseModal: () => void;
  handleShowModal: () => void;
}

export const SharedLayoutContext = createContext<OffCanvasToggler>({
  showOffCanvas: false,
  handleShowOffCanvas: () => {},
  handleCloseOffCanvas: () => {},

  showModal: false,
  handleShowModal: () => {},
  handleCloseModal: () => {}
});

export const SharedLayout = () => {

  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseOffCanvas = () => setShowOffCanvas(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <SharedLayoutContext.Provider value={{
        showOffCanvas,
        handleCloseOffCanvas,
        handleShowOffCanvas,
        showModal,
        handleCloseModal,
        handleShowModal}} 
      >
      <Header />
      <LogInModal />
      <OffCanvas />
      <Outlet/>
    
    </SharedLayoutContext.Provider>
  )
}

                