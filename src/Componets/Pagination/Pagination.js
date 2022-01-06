import "./Pagination.css";

function Pagination({children,width,height,bgColor,borderRadius}) {

    const paginationStyle = {
        width: width,
        height: height,
        backgroundColor: bgColor,
        borderRadius: borderRadius,
    }


    return (
        <div className="myPagination" style={paginationStyle}>
            <ul className="lists">
                {children}
            </ul>
        </div>
    )
}

export default Pagination
