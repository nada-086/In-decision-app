import React from 'react'
import {Option} from './Option' 

export const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button--link" onClick={props.handleDelete}>Remove All</button>
            </div>
            {props.value.length == 0 && <p className='widget-message'>Please add an option to get started!</p>}
            {props.value.map((option, index) => <Option key={option} count={index + 1} optionText={option} handleDeleteOption={ props.handleDeleteOption } />)}
        </div>
    );
}