import PropTypes from 'prop-types'
import './Modal.css'

function Modal({
        children,
        open,
        close,
        headerBgColor,
        title,
        titleColor,
        titleFontSize,
        fade,
        backdrop,
        fullscreen,
        size,
        centered,
        scrollable,
        transition,
        bgColor,
        cancel,
        submit,  
    }) {
        if(!open){
            return null;
        }

        const modalStyle = {
            backgroundColor: bgColor,
        }

        const headerStyle = {
            backgroundColor: headerBgColor,
        }

        const titleStyle = {
            color: titleColor,
            fontSize: titleFontSize,
        }

        const headerCancelStyle = {
            fontSize: titleFontSize,
        }

        return (
            <>
                <div className={`bg-div ${backdrop?"modal-backdrop":null} ${fade?"fade":null}`} onClick={close}></div>

                <div className={`modal ${fullscreen}
                            ${size} 
                            ${centered?"centered":null} 
                            ${transition?"transition":null}`}
                            style={modalStyle} >

                    <div className="modal-header" style={headerStyle}>
                        {title && <div className="modal-header-title" style={titleStyle} >{title}</div>}
                        <div className="modal-header-cancel" onClick={close} style={headerCancelStyle} >X</div>
                    </div>

                    <div className={`modal-body ${scrollable?"scroll":null}`}>{children}</div>

                    <div className="modal-footer">
                        {cancel && <button className="modal-footer-button" onClick={close} >{cancel}</button>}
                        {submit && <button className="modal-footer-button">{submit}</button>}
                    </div>
                </div>
            </>
        )
    }

    Modal.defaultProps = {
        title : "Default Title",
        titleColor: "rgb(0,0,0)",
        titleFontSize: "25px",
        cancel: "CANCEL",
        fade: true,
        backdrop: true,
        size: "sm",
        centered: true,
        scrollable: true,
        transition: true,
        bgColor:"gray",

    }

    Modal.propTypes = {
        children: PropTypes.node,
        open: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        title: PropTypes.string,
        cancel: PropTypes.string,
        submit: PropTypes.string,
        fade: PropTypes.bool,
        backdrop: PropTypes.bool,
        fullscreen: PropTypes.string,
        size: PropTypes.string,
        centered: PropTypes.bool,
        scrollable: PropTypes.bool,
        transition: PropTypes.bool,
        bgColor: PropTypes.string,
        titleColor: PropTypes.string,
        titleFontSize: PropTypes.string,
        headerBgColor: PropTypes.string,
    }

export default Modal
