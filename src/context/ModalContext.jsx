import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

ModalProvider.propTypes = {
  children: PropTypes.node,
};

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = function () {
    setShowModal(!showModal);
  };
  return (
    <ModalContext.Provider value={{ showModal, handleShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

const useModalContext = function () {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error(`
    ModalContext was used outside of 
    ModalProvider 
  `);

  return context;
};

export { useModalContext, ModalProvider };
