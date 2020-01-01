import React from 'react';
import ReactDOM from 'react-dom';
import MyCounter from './MyCounter';
import MyForm from './MyForm';

class App extends React.Component {

    render() {
        return (
            <div>
                <MyCounter></MyCounter>
                <MyForm />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);