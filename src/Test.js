// import e from "express";
import React from "react";
import PropTypes from "prop-types";
// function Test(){
//     return (
//          <h1>Hello, I am Suyash</h1>
//     );
// }

// class Test extends Component{
//     render () {
//         return (
//                      <h1 style={{color:"green", backgroundColor:"lightblue"}}>Hello, I am Suyash</h1>
//                 );
//     }
//    }

// class Test extends Component {
//     state = {
//         isLoggedIn: false,  
//     };

//     render(){
//         return (
//             <div>  
//                 { !this.isLoggedIn ? (
//                     <h1>You are not logged in</h1>
//                 )  : (
//                     <h1>Congratulations, you are logged in</h1>
//                 )

//                 } 

//                 <button onClick={(e) => this.setState({isLoggedIn: !this.state.isLoggedIn})}>
//                     Login

//                 </button>
                
            

//             </div>
            
//         )

        
//     }
// }


 const Test = ({name = "", setName}) =>{
    return (
        <>

        <h1>The name is: {name}</h1>
        <input type="text"  value={name} onChange = {(e) => setName(e.target.value)}/>
        </>
        
    );
    
    
};
Test.propType = {
    name: PropTypes.string,
    setName: PropTypes.func,
};
export default Test;