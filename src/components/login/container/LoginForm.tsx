import React, { useState } from "react";
import { connect } from "react-redux";
import { LoginActionType, AuthenticationAction } from "../actions/LoginActions";
import { Form, Button } from "react-bootstrap";

const LoginForm = (props: any) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-form-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            //console.log("user details:", userName, password);
            props.initiateUserAuth(userName, password);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch: React.Dispatch<AuthenticationAction>) => {
  return {
    initiateUserAuth: (userName: string, password: string) =>
      dispatch({
        type: LoginActionType.INITIATE_USER_AUTHENTICATION,
        payload: {
          userName: userName,
          password: password,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
