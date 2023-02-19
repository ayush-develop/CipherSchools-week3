import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookie";
// class SampleRenderProps extends React.Component {
//     render() {
const SampleRenderProps =() => {
    const[cookies, setCookie, removeCookie]= useCookies(["name"]);
    console.log(cookies);
        return(
            <RenderPropsComponent
             render={() => {
                return (
                    <div>
                        
                        <h1
                        onClick={(e)=>{
                            setCookie("age",22);
                            console.log(cookies);
                         }}>This is from render props</h1>
                    </div>
                );
             }}
            />
        )
    
}

export default SampleRenderProps;