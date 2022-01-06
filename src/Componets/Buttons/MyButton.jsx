import "./MyButton.css";

function MyButton({
    children,
    type,
    color,
    bgColor,
    disable,
    size,
    outline,
    block,
    borderRadius
    }) {



    return (
        <button 
            className={`button ${type} ${block && "block"} ${size} ${disable&&"disable"}`}
            style={{backgroundColor:disable?"":bgColor,color:disable?"":color,border:outline&&`${borderRadius} solid ${color}`}}
            disabled = {disable}
            onClick={()=>console.log("not disabled")}
        >
            {children}
        </button>
    )
}

export default MyButton

// style={outline?outlineStyle:bgColor?btnStyle:null} disabled
