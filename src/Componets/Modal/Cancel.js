import React from "react";
import './Cancel.css';

function Cancel({closeModal,cancel}){
    return(
        <>
            <button className="cancel" onClick={closeModal}>{cancel}</button>
        </>
    )
}

export default Cancel;