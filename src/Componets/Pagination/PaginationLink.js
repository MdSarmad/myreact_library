import "./PaginationLink.css";
import {FaAngleDoubleLeft, FaAngleLeft, FaAngleDoubleRight, FaAngleRight} from 'react-icons/fa';


function PaginationLink({text,href}) {


    return (
            <a href={href} className={`element ${text==="first"?"first":null} ${text==="last"?"last":null}`}>
                {text==="first" && <FaAngleDoubleLeft/>}
                {text==="last" && <FaAngleDoubleRight/>}
                {text==="next" && <FaAngleRight/>}
                {text==="prev" && <FaAngleLeft/>}
                {text!=="first"&&text!=="last"&&text!=="next"&&text!=="prev"&&text}
            </a>
    )
}

export default PaginationLink;

// ${text==="first"?<FaAngleDoubleRight/>:null}
// ${text==="last"?<FaAngleDoubleLeft/>:null}
// ${text==="next"?<FaAngleLeft/>:null}
// ${text==="prev"?<FaAngleRight/>:null}