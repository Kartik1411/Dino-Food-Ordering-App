import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

function Modal(props) {

    const portalElement = document.getElementById('overlays');

    return (
        <>
            {/* without portal */}
            {/* <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay> */}

            {/* with portal */}
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children} </ModalOverlay> , portalElement)}
        </>
    )
}

export default Modal
