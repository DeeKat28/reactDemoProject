import React from 'react';

const validEmailRegex =
    RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

const validPhoneRegex =
    RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);

const validateForm = (errors) => {
    let valid = true;

    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false) //&& can be used as a "guard." Basically it means stop evaluating the expression if one of the operands returns a "falsy" value.
    );

    return valid;
}

class MyForm extends React.Component {

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

        console.log(name, value);

        let errors = this.state.errors;

        switch(name) {
            case 'fullName':
                errors.fullNameErr = value.length < 5 ? 'Name must be 5 characters long!' : '';
                break;
            case 'phoneNumber':
                errors.phoneNumberErr = validPhoneRegex.test(value) ? '' : 'Invalid Phone Number';
                break;
            case 'email':
                errors.emailErr = validEmailRegex.test(value) ? '' : 'Invalid email address';
                break;
            case 'dob':
                console.log( new Date(value).getFullYear() );
                errors.dobErr = new Date(value).getFullYear() > 2016 ? '' : 'Not Eligible';
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

    handleSubmit = (event) => {
        event.preventDefault();

        if(validateForm(this.state.errors)) {
            console.info('Valid Form');
        } else {
            console.error('Invalid Form');
        }
    }
    
    render() {

        const { errors } = this.state;

        return (
            <div className="ui left aligned segment">
                <form onSubmit={ this.handleSubmit } className="ui form">
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
                        {errors.fullNameErr.length > 0 && 
                            <span className="ui negative mini message">{errors.fullNameErr}</span>}
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
                        {errors.phoneNumberErr.length > 0 &&
                            <span className="ui negative mini message">{errors.phoneNumberErr}</span>}
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
                        {errors.emailErr.length > 0 &&
                            <span className="ui negative mini message">{errors.emailErr}</span>}
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
                            {errors.dobErr.length > 0 &&
                                <span className="ui negative mini message">{errors.dobErr}</span>}
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