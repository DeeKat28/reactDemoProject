import React from 'react';
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

export default App;