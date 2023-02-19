import React, { Component } from "react";
import { testAPI } from "../apis/testApi";

class SumNumbers extends Component {
    state= {
        firstNumber :0,
        secondNumber :0,
        sum :0,
        sumString: "the component is not updated the state"
    };

    componentDidMount() {
        console.log("We are in componentdidMount of some number")
        testAPI(5,6).then((sum)=>{
            this.setSum(sum);
        });
    }

    // componentDidUpdate(){
    //     console.log("Component has updated");
    //     this.setState({...this.state,sumString: `The sum is: ${this.state.sum}`});
    // }

    setSum = (sum,firstNumber,secondNumber) =>{
        if (typeof sum !=="undefined") {
        this.setState({...this.state,sum});
        } else {
            this.setState({
                ...this.state,
                sum: this.state.firstNumber + this.state.secondNumber,
            });
        }
    };

    render() {
        return (
            <div>
                <input 
                type="number" 
                placeholder="Enter first Number"
                onChange={(e)=>{
                    this.setState({
                        ...this.state,
                        firstNumber:parseInt(e.target.value),
                    });
                }}
                value={this.firstNumber}
                />
                <input 
                type="number" 
                placeholder="Enter second Number"
                onChange={(e)=>{
                    this.setState({
                        ...this.state,
                        secondNumber:parseInt(e.target.value),
                    });
                }}
                value={this.secondNumber}
                />
                <button onClick={(e)=> this.setSum()}>Add Numbers</button>
                <h3>The sum is: {this.state.sum}</h3>
            </div>
        );
    }
}
export default SumNumbers;