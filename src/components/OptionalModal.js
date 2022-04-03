import React from 'react';
import ReactModal from 'react-modal';

const OptionalModal = (props) => {
    return (
        <ReactModal isOpen={props.selectedOption ? true : false}
            closeTimeoutMS={200}
            className="modal"
            contentLabel="Selected Option"
            onRequestClose={props.handleClearSelectedOption}>
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
        </ReactModal>
    );
};

export default OptionalModal;