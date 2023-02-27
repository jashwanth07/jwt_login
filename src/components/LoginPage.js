import axios from "axios";
import React from "react";
import { setAuthToken } from "./setAuthToken";

const LoginPage = () => {
  const handleSubmit = (email, pass) => {
    //reqres registered sample user
    const loginPayload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    axios
      .post("https://reqres.in/api/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token;
        console.log(token);
        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };
  return <div>
    <button onClick={handleSubmit}>submit</button>
  </div>;
};

export default LoginPage;
