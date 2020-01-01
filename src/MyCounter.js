import React from 'react';

class MyCounter extends React.Component {

    state = { counter: 0 };

    onIncrementClick = (event) => {
        this.setState({ counter: this.state.counter+1 });
    }

    render() {
        return (
            <div>
                <div className="ui placeholder segment">
                    <div className="ui centered card">
                        <div className="content">
                            <a className="header" href="/">{ this.state.counter }</a>
                            <div className="meta">
                                <span>Counter value</span>
                            </div>
                            <div className="description">
                                Click buttons to increment/decrement.
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button" onClick={ this.onIncrementClick }>+</div>
                                <div className="ui basic red button" 
                                    onClick={ (e) => this.state.counter > 0 ? this.setState({ counter: this.state.counter-1 }) : null }>-</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyCounter;