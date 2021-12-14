import React,{useState} from 'react';
import Modal from './Componets/Modal/Modal';
import './App.css';

function App() {
  const [isOpen,setIsOpen]=useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button onClick={openModal}>Click Me</button>
      <Modal open={isOpen} closeModal={closeModal} title={"Modal Title"} text={"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."} cancel={"CLOSE"} submit={"SUBMIT"} />
      
    </div>
  );
}

export default App;
