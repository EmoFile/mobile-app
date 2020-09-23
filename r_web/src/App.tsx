import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
    state = {
        display: false
    }
    toto = {
        display: "Pomme"
    }
    click = () => {

        this.toto.display = "Banane";
        this.setState({display: true})
        console.log("click")
        console.log(this.state.display)
        console.log(this.toto.display)

    }

    render() {
        console.log("Render")
        console.log(this.state.display)
        console.log(this.toto.display)
        return (
            <div className="App">
                <header className="App-header">
                    <button onClick={this.click}>Clique-moi</button>
                    {
                        this.state.display && <div>T'as cliqué connard !!!</div>
                    }
                </header>
            </div>
        );
    }
}

