import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header";
import Login from "./Pages/Login";
import RegisterEmployer from "./Pages/RegisterEmployer";
import RegisterJobSeeker from "./Pages/RegisterJobSeeker";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/isveren-hesabi-olustur" element={<RegisterEmployer />} />
          <Route path="/is-arayan-hesabi-olustur" element={<RegisterJobSeeker />} />
          <Route path="/giris-yap" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
