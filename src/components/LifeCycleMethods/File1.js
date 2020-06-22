import React, { Component } from 'react';

import './App.css';
import ClassCounter from './File2';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            seed: 0
        }
    }

    mountHandler = () => {
        this.setState({ mount: true })
    }
    unMountHandler = () => {
        this.setState({ mount: false })
    }

    seedGenerator = () => this.setState({ seed: Math.floor(Math.random() * 1000) });

    render() {
        return (
            <div className="App">
                <button onClick={this.mountHandler} disabled={this.state.mount}>Mount</button>
                <button onClick={this.unMountHandler} disabled={!this.state.mount}>Unmount</button>
                <button onClick={this.seedGenerator}>SEED GENERATOR</button>
                {this.state.mount ? <ClassCounter seed={this.state.seed} /> : null}
            </div>
        );
    }

}

export default File1;
