import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super(); //Error 1

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        //const style = {fontSize : "50px", padding : "15px 30px"};  
        return (
            <div className='Counter'>
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <ResetButton resetMethod={this.reset} />
            </div>
        );
    }

    increment(by) {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){
        this.setState(
            (prevState) => {
                return {counter : prevState.counter - by}
            }
        );
    }

    reset() {
        this.setState({
            counter: 0
        });
    }

}

class ResetButton extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='ResetButton'>
                <button style={{ backgroundColor: 'black', width: "200px"}} 
                onClick={() => this.props.resetMethod()}
                >Reset</button>
            </div>
        );
    }
}

class CounterButton extends Component {

    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super(); //Error 1
    }



    render() {
        //const style = {fontSize : "50px", padding : "15px 30px"};  
        return (
            <div className='CounterButton'>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

}
CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number

}


export default Counter;