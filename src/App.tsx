import React from "react";
import "./App.css";
import { connect } from "react-redux";
import LoginForm from "./components/login/container/LoginForm";
import Home from "components/login/pages/Home";

function App(props: any) {
  return (
    <div className="App">
      {!props.authStatus ? (
        <LoginForm {...props} />
      ) : (
        // <div>Hello {props.userName}</div>
        <Home/>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps, null)(App);
