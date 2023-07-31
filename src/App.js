import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header";
import Login from "./Pages/Login";
import RegisterEmployer from "./Pages/RegisterEmployer";
import RegisterJobSeeker from "./Pages/RegisterJobSeeker";
import Footer from "./Layout/Footer";
import BlogTechnology from "./Pages/BlogTechnology";
import BlogEdu from "./Pages/BlogEdu";
import BlogCompany from "./Pages/BlogCompany";
import BlogDetails from "./Pages/BlogDetails";
import UserProfile from "./Pages/UserProfile";
import SSS from "./Pages/SSS";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/isveren-hesabi-olustur"
            element={<RegisterEmployer />}
          />
          <Route
            path="/is-arayan-hesabi-olustur"
            element={<RegisterJobSeeker />}
          />
          <Route path="/giris-yap" element={<Login />} />
          <Route path="/teknoloji" element={<BlogTechnology />} />
          <Route path="/egitim" element={<BlogEdu />} />
          <Route path="/firmalar" element={<BlogCompany />} />
          <Route path="/haber-detay:id" element={<BlogDetails />} />
          <Route path="/kullanici-profili" element={<UserProfile />} />
          <Route path="/sss" element={<SSS />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
