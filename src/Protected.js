import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./components/Registration/Login";
function Protected(props) {
  const navigate = useNavigate();
  const login = localStorage.getItem("jwt");
  const { Component } = props;
  useEffect(() => {
    if (!login) {
      navigate("/Login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;
