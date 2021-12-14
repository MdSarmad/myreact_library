import React from "react";
import Cancel from "./Cancel";
import Submit from "./Submit";
import './Modal.css'

function Modal({open,closeModal,title,text,cancel,submit}){
    if(!open){
        return null; 
    }
    return(
        <div className="modal-container">
            <div className="modal-header">
                <div className="modal-title">{title}</div>
                <div className="modal-close" onClick={closeModal}>X</div>
            </div>
            <div className="modal-body">
                <div className="modal-body-text">{text}</div>
            </div>
            <div className="modal-footer">
                {/* <button className="cancel" onClick={closeModal}>{cancel}</button> */}
                {cancel && <Cancel cancel={cancel} closeModal={closeModal}/>}
                {submit && <Submit submit={submit} />}  
            </div>      
        </div>
    )
}

export default Modal; 