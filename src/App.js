import './App.css';
// import './styles.css';
import React, { Component } from 'react';
import KeyPad from './components/KeyPad';
import Display from './components/Display';

class App extends Component {
  state = {
    result: ""
  }
  onClick=button=>{
    console.log("The link was clicked"+button+" " +(button === 'backspace'));
    // to specify % should be used as percentage instead of mod
    
    if(button === "%"){
      this.setState({
        result:eval(eval(this.state.result)+'/100')
      })
    } 
    // to negate the + and - operators
    else if(button === '+/-'){
      if(this.state.result.charAt(this.state.result.length-1)==='+'){
        this.setState({
          // str1.slice(0, -1){
          result:this.state.result.slice(0,-1)+'-'
        })
      }
      else if(this.state.result.charAt(this.state.result.length-1)==='-'){
          this.setState({
            // str1.slice(0, -1){
              result:this.state.result.slice(0,-1)+'+'
          })
        }
      else{
        this.setState({
          // str1.slice(0, -1){
            result:this.state.result+'-'
        })
      }
      
    }
    // to eval the expression and set the state
    else if(button === "="){
      if(this.state.result.includes("--")){
        this.setState({
          result:eval(this.state.result.replace('--','+'))
        })
        // console.log("The link was clicked inside if"+this.state.result);  //Debug
      }
      this.setState({
        result: eval(this.state.result)
      })
      if(Number.isNaN(this.state.result)){
        this.setState({
          result: "Error"
        })
      }
      
      // console.log("The link was clicked"+this.state.result); 
    }
    // clear the display and state
    else if(button === "C"){
      this.setState({
        result :""
      })
    }
    else if(button ==='+' || button === '-' || button==='*' ||button=== '/'){
      console.log(this.state.result+"befpre lastchar"+typeof(this.state.result));
      let lastChar;
      try{
        lastChar = this.state.result.charAt(this.state.result.length-1);
      }
      catch{
        lastChar = this.state.result;
      }
      // to avoid 1st character of expression as operators
      // console.log(lastChar+" last character");
      if(lastChar===""){
        this.setState({
          // str1.slice(0, -1) //debug
          result:""
        })
      }
      // to avoid multiple continuous operators i.e + / *
      else if(lastChar ==='+' || lastChar === '-' || lastChar==='*' || lastChar=== '/'){
        // console.log("last charcter inside");
        this.setState({
          // str1.slice(0, -1) //debug
          result:this.state.result.slice(0,-1)+button
        })
        console.log("last charcter inside"+this.state.result);
      }
      else{
        this.setState({
          result: this.state.result+button
        }) 
      }
    }
    else if(button == 'backspace'){
      console.log("The link was clicked backspace !!" + this.state.result);
      if(this.state.result.length>1 ){
        this.setState({
          result :this.state.result.slice(0,-1)
        })
        
      }
      else{
        this.setState({
          result : ""
        })
      }
      
    }
    else{
      this.setState({
        result: this.state.result+button
      }) 
    }
}

  render(){
    const renderDisplay = () => {
      // console.log("here" +isNaN(this.state.result)); // Debug
      if(Number.isNaN(this.state.result) || this.state.result === Infinity){
        // return error if Math exception occurs
        return <Display result={"Error"} />
        
      } else {
        return <Display result={this.state.result} />;
      }
    }
    return (
      <div>
         <h1 id='heading'>Calculator</h1>
      
      <div className="calculator-container">
        {/* conditional rendering to handle mathematical exceptions*/}
        
        {renderDisplay()}
        {/* Keypad woth obclick button handle */}
        <KeyPad onClick={this.onClick}/>
      </div>
      </div>
    )
  }
}
export default App;
