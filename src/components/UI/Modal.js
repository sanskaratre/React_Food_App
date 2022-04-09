import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const Overlay = (props) => {
    return (
    <div className={classes.modal}>
       <div className={classes.content}>{props.children}</div>
    </div>
    )
};

const Modal = (props) => {
    const portalElement = document.getElementById('overlay');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement )}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalElement )}
        </Fragment>
    )
};

export default Modal;