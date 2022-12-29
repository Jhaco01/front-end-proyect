import './SharedLayout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { createContext, useState } from 'react';
import { OffCanvas } from '../../components/OffCanvas/OffCanvas';

interface OffCanvasToggler {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

export const SharedLayoutContext = createContext<OffCanvasToggler>({
  show: false,
  handleShow: () => {},
  handleClose: () => {}
});

export const SharedLayout = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <SharedLayoutContext.Provider value={{show,handleClose,handleShow}} >
      <Header />
      <OffCanvas />
      <Outlet/>
    </SharedLayoutContext.Provider>
  )
}

                