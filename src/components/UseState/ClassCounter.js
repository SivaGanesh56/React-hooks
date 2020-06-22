import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        count: 0
    }

    incrememtHandler = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementHandler = () => {
        this.setState({ count: this.state.count - 1 });
    }

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
}

export default ClassCounter;