import "./PaginationItem.css";

function PaginationItem({children,width,height}) {
    const listStyle = {
        width: width,
        height: height,
    }
    return (
        <>
            <li className="btn" style={listStyle}>{children}</li>
        </>
    )
}

export default PaginationItem
