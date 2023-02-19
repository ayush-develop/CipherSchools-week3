 import React, {useState} from "react";

 const UserDetails  = ({user = {}}) => {
    const[h1Text, setH1Text] = useState("This is demo component");
    return(
        <div>
            <h3>{user.name}</h3>
            <h5>Email: {user.email}
            <br/>
            Phone Number: {user.phoneNumber}
            </h5>
            <h1>
                {/* This is demo component */}
                {h1Text}
            </h1>
            <button onClick={(e)=>{
                // console.log(e);
                setH1Text("This is Cypher School");
            }}>Click Me!</button>
        </div>
    );
 };

 //class UserDetails extends Component{
    //     user = this.prop.user;
    
    //     render(){
    //         return(
    //             <div>
    //                          <h3>{this.user.name}</h3>
    //                         <h5>Email: {this.user.email}
    //                            <br />
    //                            Phone Number: {this.user.phone}
    //                         </h5>
    //                     </div>
    //         )
    //     }
    //  }

 export default UserDetails; 