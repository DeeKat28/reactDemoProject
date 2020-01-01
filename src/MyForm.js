import React from 'react';

class MyForm extends React.Component {

    state = { genderSelectedOption: 'male' }

    handleChange = (event) => {
        this.setState({ genderSelectedOption: event.target.value })
    }
    
    render() {
        return (
            <div className="ui left aligned segment">
                <form className="ui form">
                    <h4 className="ui dividing header">Please provide your information</h4>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="inline fields">
                        <label>Gender:</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="male" 
                                    checked={ this.state.genderSelectedOption === "male" } 
                                    onChange={this.handleChange} 
                                />
                                <label>Male</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="female" 
                                    checked={ this.state.genderSelectedOption === "female" } 
                                    onChange={this.handleChange}
                                />
                                <label>Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label>Phone number</label>
                        <input type="number" name="phoneNumber" placeholder="Phone Number" />
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
                    <div className="field">
                        <label>Comments</label>
                        <textarea></textarea>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default MyForm;