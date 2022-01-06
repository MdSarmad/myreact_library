import "./Breadcrumb.css"
import PropTypes from 'prop-types'

function Breadcrumb({children,tag,href,separator}) {
    const Mytag = tag;
    return (
        <>
            <span>
                <Mytag href={tag==="a"?href:null}>
                    {children}
                </Mytag>
            </span>
            <span style={{padding:"0px 10px", fontSize:"25px"}}>{tag==="a"?separator:null}</span>
            
        </>
    )
}

export default Breadcrumb

Breadcrumb.defaultProps = {
    separator: "/"
}

Breadcrumb.propTypes = {
    separator: PropTypes.string,
}