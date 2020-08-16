import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            show: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    clickHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }
    
    clockRen = () => {
        return (
            this.state.show === false ?
                <div>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div> : null)
    }
    render() {
        return (
            <div>
                <h1 onClick={this.clickHandler}>Hey There!</h1>
                <this.clockRen />
            </div>
        );
    }
}

export default TableRow;