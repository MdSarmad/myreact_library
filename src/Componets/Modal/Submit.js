import React from "react";
import './Submit.css';

function Submit({submit}){
    return(
        <>
            <button className="submit">{submit}</button>
        </>
    )
}

export default Submit;