import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Store/userSlice";

const LoginRedux = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredential = {
      email,
      password,
    };
    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };
  return (
    <div className="mt-5">
      <form onSubmit={handleLoginEvent}>
        <label >Email :</label>
        <input
          type="email"
          required
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Şifre :</label>
        <input
          type="password"
          required
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md">
          {loading ? "Loading..." : "Giriş Yap"}
        </button>
        {error &&(
            <div className="alert alert-danfer" role='alert'>{error}</div>
        )}
      </form>
    </div>
  );
};

export default LoginRedux;
