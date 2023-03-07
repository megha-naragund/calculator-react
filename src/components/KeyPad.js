import React, { Component } from 'react';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>

class KeyPad extends Component{
    render(){
        return(
            <div className="keypad">
            {/* Button and operator of the calculator */}
            <div className="buttons" >
            <button style={{color:'blue'}} onClick={e => this.props.onClick(e.target.innerHTML)}>AC</button>
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
            <button id="backspace" onClick={e => this.props.onClick(e.target.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
</svg></button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>0</button>
            <button onClick={e => this.props.onClick(e.target.innerHTML)}>.</button>
            <button style={{backgroundColor: 'rgb(179, 122, 31)'}} onClick={e => this.props.onClick(e.target.innerHTML)}>=</button>
            {/* <button className ="operators" onClick={e => this.props.onClick(e.target.innerHTML)}>+</button> */}
            </div>
          </div>
        )
    }
}
export default KeyPad;