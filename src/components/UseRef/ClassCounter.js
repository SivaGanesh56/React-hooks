import React, { Component } from 'react';

export class ClassCounter extends Component {
    interval

    state = {
        timer: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timer: prevState.timer + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Count - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear-Interval</button>
            </div>
        )
    }
}

export default ClassCounter;

