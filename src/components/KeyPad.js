import React, { Component } from 'react';
class KeyPad extends Component{
    render(){
        return(
            <div className="keypad">
            {/* Button and operator of the calculator */}
            <div className="buttons" >
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>AC</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>+/-</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>%</button>
            <button className ="operators" onClick={e => this.props.onClick(e.target.innerHTML)}>/</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>7</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>8</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>9</button>
            <button className ="operators" onClick={e => this.props.onClick(e.target.innerHTML)}>*</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>4</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>5</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>6</button>
            <button className ="operators" onClick={e => this.props.onClick(e.target.innerHTML)}>-</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>1</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>2</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>3</button>
            <button className ="operators" onClick={e => this.props.onClick(e.target.innerHTML)}>+</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>0</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>.</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>=</button>
            </div>
          </div>
        )
    }
}
export default KeyPad;