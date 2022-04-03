import React from 'react';
import { AddOption } from './AddOption';
import { Header } from './Header';
import { Action } from './Action';
import { Options } from './Options';
import OptionalModal from './OptionalModal';

export class IndecisionApp extends React.Component{
    state = {
        options: [], 
        selectedOption: undefined
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDelete = () => {
        this.setState(() => ( { options: [] } ))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return (optionToRemove !== option);
            })
        }));
    }

    handlePick = () => {
        const num = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[num];
        this.setState(() => ({ selectedOption: option }));
    } 

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if(this.state.options.indexOf(option) != -1){
            return 'This option already exists'
        }
        else {
            this.setState((prevState) => ({options: prevState.options.concat([option])}))
        }
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className='widget'>
                        <Options
                            value={this.state.options}
                            handleDelete={this.handleDelete}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption
                            handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionalModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}/>
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}