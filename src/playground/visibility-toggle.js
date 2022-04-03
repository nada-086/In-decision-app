class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    toggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <p hidden={!this.state.visibility}>Here are some text</p>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
