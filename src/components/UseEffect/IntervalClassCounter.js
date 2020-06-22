import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        console.log('DidMount')
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log('Will UnMount');
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default IntervalClassCounter;
