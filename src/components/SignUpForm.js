import React,{ useState} from "react";
import isValidUser from "../Validators";
const SignUpForm = () =>{
    const [state, setState] = useState({
        firstName:"",
        lastName: "" ,
        email: "",
        password: "",
    });
    // const formik= useFormik({
    //     initialValues: {
    //         firstName:"",
    //         lastName: "" ,
    //         email: "",
    //         password: "",

    //     },
    //     onSubmit: (values) => {
    //         if (isValidUser(values)) {
    //             console.log("valid user");
    //         } else {
    //             setError("Invalid user");
    //             console.log(
    //                 "invalid user"
    //             )
    //         }
    //     },
    // });

    const [error, setError] = useState("");
        
    //});

    let handleChange = (e)=>{
        setState({...state, [e.target.name]: e.target.value});
    }
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            if(isValidUser({...state })) {
                console.log("user is valid",state);
             } else {
                setError("The user is invalid");
                console.log("user is invalid");
             }
            }}
            >

        
            <label>First Name</label>
            <input name={"firstName"} type={"text"} onChange={handleChange} value={state.firstName} placeholder="First name"/>

            <label>Lastst Name</label>
            <input name={"lastName"} type={"text"} onChange={handleChange} value={state.lastName} placeholder="Last name"/>

            <label>Email</label>
            <input name={"email"} type={"text"} onChange={handleChange} value={state.email} placeholder="email"/>

            <label>Password</label>
            <input name={"password"} type={"text"} onChange={handleChange} value={state.password} placeholder="password"/>

            <button type="button">Submit</button>
            <span style={{color: "red"}}>{error}</span>
        </form>
    )
};

export default SignUpForm;