import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
    state = {
        isLoaded: false,
        items: {}
    }
    click = () => {
        fetch("http://localhost:5001/mobileprojectril19/us-central1/api/data")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                });
        console.log(this.state.items)

    }

    render() {
        console.log("Render")
        console.log(this.state.isLoaded)
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.click}>Clique-moi</button>
                    {
                        this.state.isLoaded && <div>T'as cliqué connard !!!</div>
                    }
                </header>
            </div>
        );
    }
}

