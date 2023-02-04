import React,{Component} from "react";
class Display extends Component{
    render(){
        let {result} =this.props;
        return(
            // Display of the calculator
            <div id="display">{result}</div>
        )
    }
}
export default Display;