import React, { Component } from 'react';

class File2 extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        this.state = {
            count: 0,
            seed: 0
        }
    }

    incrememtHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementHandler = () => {
        this.setState({ count: this.state.count - 1 });
    }

    // Allows  Copy props to state
    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed && props.seed % 2 !== 0) {
            return {
                seed: props.seed,
                count: props.seed
            }
        }
        return null
    }

    // Only once it was trigger i.e, after rendering()
    componentDidMount() {
        console.log('Component Did Mount');
        console.log('-------------------');

    }

    // Based on nextProps and nextState dom was re-rendered or not
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count === -1) {
            console.log(`Should Component Update--- DON'T RENDER`);
            return false;
        }
        console.log(`Should Component Update--- RENDER`);
        return true;
    }

    // based on props and state we can send snapshot to ComponentDidUpdate()
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    // Every time state updates render method was called
    render() {
        console.log('Render');
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.incrememtHandler}>INCREMENT</button>
                <button onClick={this.decrementHandler}>DECREMENT</button>
            </div>
        );
    }

    // If state changes it will trigger
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState);
        console.log('Component Did Update');
        console.log('---------------');
    }

    // Catches error without blocking whole DOM
    componentDidCatch(error, info) {
        console.log(error, info);
    }
}

export default File2;