import React, { Component} from 'react'

class Name extends Component {
    state = { name: "Shantanu Shubham"};

    // constructor(props) {
    //     super(props);
    //     this.stateName = this.setName.bind(this);
    // }

    setName =(name)=> {
        this.setState({...this.state, name});
    };

    testHandler= ()=>{
        console.log("testHandler");
    };

    render() {
        return(
        <>
            <h1>The name is :{this.state.name}</h1>
            <button onClick={()=>{
                this.setName("Amrit");
                this.testHandler();
                }}>Click Me!</button>
        </>
        );
  }
}

// const Name = () => {
//     const [state, setState] = useState({ name:"Shantanu Shubham!"});

//     let setName = (e) => {
//         setState({...state, name: "Amrit Anand"});
//     }
//     return(
//         <>
//         <h1>The name is: {state.name}</h1>
//         <button onClick={setName}>Click Me!</button>
//         </>
//     )
// }
export default Name;