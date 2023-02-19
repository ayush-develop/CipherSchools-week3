import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset} from "../actions/CounterActions"
 const ReduxCounter = ()=> {
    return(
        <div>
            <h2>The count is: 0</h2>
            <button>Increase</button>
            <button>Decrease</button>
            <button>Reset</button>
        </div>
    )
 };

 const mapStateToProps = (state)=> ({count: state.count});
 const mapDispatchToProps = (dispatch) => ({
    increment: ()=> dispatch(increment()),
    decrement: ()=> dispatch(decrement()),
    reset: ()=> dispatch(reset()),
 })
  export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);