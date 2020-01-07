import React from 'react';

class MyForm extends React.Component {

    validEmailRegex =
        RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

    validPhoneRegex = 
        RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);

    state = {
        fullName: '', 
        gender: 'male',
        phoneNumber: '',
        email: '',
        dob: '',
        errors: {
            fullNameErr: '',
            phoneNumberErr: '',
            emailErr: '',
            dobErr: ''
        }
    };

    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({
                [name]: value
            });

        console.log(name, value);

        let errors = this.state.errors;

        switch(name) {
            case 'fullName':
                errors.fullNameErr = value.length < 5 ? 'Name must be 5 characters long!' : '';
                break;
            case 'phoneNumber':
                errors.phoneNumberErr = this.validPhoneRegex.test(value) ? '' : 'Invalid Phone Number';
                break;
            case 'email':
                errors.emailErr = this.validEmailRegex.test(value) ? '' : 'Invalid email address';
                break;
            case 'dob':
                console.log( new Date(value).getFullYear() );
                errors.dobErr = new Date(value).getFullYear() > 1992 ? '' : 'Not Eligible';
                break;
            default:
                break;
        }

        //this.setState({
        //    errors: Object.assign({}, this.state.errors, { [name]: value }), 
        //}, () => console.log(this.state.errors)
        //);

        //this.setState({
        //    errors: {
        //        ...this.state.errors
        //    }
        //}, () => console.log(this.state.errors));

        //this.setState({ errors, [name]: value }, () => {
        //    console.log(this.state.errors)
        //});

        this.setState({
            [name]: value
        }, () => console.log(this.state.errors));
    }
    
    render() {
        return (
            <div className="ui left aligned segment">
                <form className="ui form">
                    <h4 className="ui dividing header">Please provide your information</h4>
                    <div className="field">
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            id="fullName" 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name" 
                            value={ this.state.fullName } 
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="inline fields">
                        <label>Gender:</label>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name="gender" 
                                    value="male" 
                                    checked={ this.state.gender === "male" } 
                                    onChange={ e => this.setState({ gender: e.target.value }) }
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
                                    checked={ this.state.gender === "female" } 
                                    onChange={ e => this.setState({ gender: e.target.value }) }
                                />
                                <label>Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="phoneNo">Phone number</label>
                        <input 
                            id="phoneNo" 
                            type="number" 
                            name="phoneNumber" 
                            placeholder="Phone Number" 
                            value={ this.state.phoneNumber }
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={ this.state.email }
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className="ui calendar">
                        <label htmlFor="dob">DOB</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="ui input left icon">
                            <i className="calendar icon"></i>
                            <input 
                                id="dob"
                                type="date" 
                                name="dob"
                                placeholder="Date/Time" 
                                value={ this.state.dob }
                                onChange={ this.handleChange }
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="comments">Comments</label>
                        <textarea id="comments"></textarea>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }

}

export default MyForm;