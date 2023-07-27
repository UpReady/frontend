import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header";
import Register from "./Pages/Register";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hesap-olustur" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
