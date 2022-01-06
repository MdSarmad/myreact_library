import './Breadcrumbs.css';

function Breadcrumbs({children,bgColor,fontSize}) {

    const myStyle = {
        backgroundColor: bgColor,
        fontSize: fontSize,
    }

    return (
        <div className="breadcrumbs" style={myStyle}>
            {children}
        </div>
    )
}

export default Breadcrumbs
