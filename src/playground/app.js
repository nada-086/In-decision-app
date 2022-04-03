const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision",
    subtitle: 'Put your life in the hands of a computer',
};

const Action = (props) => {
    return (
        < div >
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}>What should I do?</button>
        </div >
    );
}

class Options extends React.Component{
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDelete}>Remove All</button>
                {!this.props.options && <p>Please add an option to get started!</p>}
                <h3>Here are your options!!</h3>
                <h4>You have {this.props.value.length} Options!!</h4>
                {
                    this.props.value.map((option) => <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={ this.props.handleDeleteOption } />)
                }
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>remove</button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDelete() {
        this.setState(() => ( { options: [] } ))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return (optionToRemove !== option);
            })
        }));
    }

    handlePick() {
        const num = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[num]);
    }

    handleAddOption(option) {
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

    render() {
        return (
            <div>
                <Header/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options value={this.state.options} handleDelete={this.handleDelete} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={ this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const User = (props) => {
    return (
        <div>
            <p>Name: { props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(<IndecisionApp options={ ['option one', 'option two']}/>, document.getElementById('app'));