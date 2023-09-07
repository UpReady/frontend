import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Store/userSlice";

const LoginRedux = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

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
        setStatus(result.status)
      }
    });
  };
  return (
    <div className="mt-5 container col-lg-3 col-12">
      <form onSubmit={handleLoginEvent}>
        <label className="form-check-label mb-2">Email :</label>
        <input
          type="email"
          required
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label className="form-check-label">Şifre :</label>
        <input
          type="password"
          required
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <a href="/sifremi-unuttum">
          <div className="row justify-content-end mx-1 forget-password">
            şifremi unuttum
          </div>
        </a>

        <div className="text-center">
          <button type="submit" className="submit-btn col">
            {loading ? "Loading..." : "Giriş Yap"}
          </button>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
              {console.log("hata varsa", status)}
            </div>
          )}
        </div>
      </form>
      <a href="/hesap-olustur">
        <div className="create-account-text text-center mt-5">
          Hesabınız yok mu ? <b> Hesap Oluştur</b>
        </div>
      </a>
    </div>
  );
};

export default LoginRedux;
