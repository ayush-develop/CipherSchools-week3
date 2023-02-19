// import React from "react";
// //import Test from "./Test";
// //import AllUserList from "./components/AllUserList";
// import './App.css';
// import SignUpForm from "./components/SignUpForm";
// //import Name from "./components/Name";
// //import SumNumbers from "./components/SumNumber";
// const App = () => {
//   return(
//     <div>
//       {/* <h1>
//         Hello, I am Shantanu
//       </h1> */}
//       {/* <Test/> */}
//       {/* <AllUserList/> */}
//       {/* <Name/> */}
//       {/* <SumNumbers/> */}
//       <SignUpForm/>

//     </div>
//   )
// }


import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore} from "react-redux";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
//import TaskScreen from "./components/TaskScreen";
import higherOrderComponent from "./components/Hoc";
import SampleRenderProps from "./components/SampleRenderProps";
//import i18Component from "./components/i18Component";
//import ErrorBoundary from "./components/errorBoundry";
import counterReducer from "./reducers/CounterReducer";
import ReduxCounter from "./components/ReduxCounter";
const App = () => {
  const TestApp = higherOrderComponent(()=> {
    return <div>Test App</div>
  });

  const myReduxStore =createStore(counterReducer);

  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
          <Route path={"/about"} element={<h1>This is on About Page</h1>} />
          <Route path={"/signup"} element={<SignUpForm/>}/>
          {/* <Route path={"/tasks"} element={<TaskScreen/>}/> */}
          <Route path={"/counter"} element={<CounterComponent/>}/>
          <Route path={"/photos"} element={<Photos/>}/>
          <Route path={"/test"} element={<TestApp/>}/>
          <Route path={"/sample"} element={<SampleRenderProps/>}/>
          {/* <Route path={"/counter"} element={<ErrorBoundary>
            <CounterComponent/>
          </ErrorBoundary>}/> */}
          {/* <Route path={"/international"} element={<i18Component/>}/> */}
          <Route path={"/redux-counter"} element= {<ReduxCounter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const MyApp =() => (
  <Provider store={myReduxStore}>
    <AnupamaContext.Provider
    value={{
      favCharacter: "Anupama",
      favVillain: "Vanraj",
      loudest: "Kavya",
    }}
    >
    <BreakingBadContext.Provider
    value={{
      favCharacter: "Walter White", mostHatedCharacter: "Jessie"
    }}
    >
      <App/>
    </BreakingBadContext.Provider>
    </AnupamaContext.Provider>
  </Provider>
)
export default App;
