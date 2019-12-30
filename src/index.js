import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="ui placeholder segment">
                    <div className="ui centered card">
                        <div className="content">
                            <a className="header" href="/">20</a>
                            <div className="meta">
                                <span>Counter value</span>
                            </div>
                            <div className="description">
                                Click buttons to increment/decrement.
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button">+</div>
                                <div className="ui basic red button">-</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui left aligned segment">
                    <div className="ui form">
                        <h4 className="ui dividing header">Please provide your information</h4>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="inline fields">
                            <label>Gender:</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" tabindex="0" class="hidden" />
                                    <label>Male</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" tabindex="0" class="hidden" />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label>Phone number</label>
                            <input type="text" name="phoneNumber" placeholder="Phone Number" autoComplete="off" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="ui calendar">
                            <label>DOB</label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="ui input left icon">
                                <i className="calendar icon"></i>
                                <input type="date" placeholder="Date/Time" />
                            </div>
                        </div>
                        <div class="field">
                            <label>Comments</label>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>


                    
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);