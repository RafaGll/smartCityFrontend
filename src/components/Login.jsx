import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  Card,
  CardTitle,
  CardText,
  Media,
} from "reactstrap";

import { GoogleLogin } from "react-google-login";
import config from "../config.js";

import MyImgLogin from "../images/background_accidentes.png";

var imgStyle = {
  width: "100%",
  height: "auto",
  margin: "auto",
};

export default function Login() {
  const [loginMessage] = useState(null);

  const navigate = useNavigate();

  const onSuccess = (res) => {
    ////////////////////////Lo que debería contener onSucess////////////////////////
    console.log("[Login Success]");
    sessionStorage.setItem('name', res.profileObj.getName());
    sessionStorage.setItem('email', res.profileObj.getEmail());
    navigate("/home");
  };

  const onFailure = (res) => {

    ////////////////////////Lo que debería contener onFailure////////////////////////
    sessionStorage.setItem('name', 'Iván González');
    sessionStorage.setItem('email', 'ivan.gzdiaz@gmail.com');
    navigate("/home");
    console.log("[Login Failed] res:", res);

  };

  return (
    <Container>
      <Row>
        <Col>
          <Card
            inverse
            body
            className="text-center"
            style={{ backgroundColor: "#000", borderColor: "#000" }}
          >
            <CardTitle tag="h5">Welcome!!</CardTitle>
            <CardText>React-based web project"</CardText>
            <CardText>
              <GoogleLogin
                clientId={config.clientID}
                buttonText="Login"
                theme="dark"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
              {loginMessage}
            </CardText>
            <Media style={imgStyle} object src={MyImgLogin} alt="Login" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
