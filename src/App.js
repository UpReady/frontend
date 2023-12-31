import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Header from "./Layout/Header";
import Login from "./Pages/Login";
import Footer from "./Layout/Footer";
import BlogTechnology from "./Pages/BlogTechnology";
import BlogEdu from "./Pages/BlogEdu";
import BlogCompany from "./Pages/BlogCompany";
import BlogDetails from "./Pages/BlogDetails";
import UserProfile from "./Pages/UserProfile";
import SSS from "./Pages/SSS";
import AboutUs from "./Pages/AboutUs";
import SearchJobScreen from "./Pages/SearchJobScreen";
import LoginRedux from "./Pages/LoginRedux";
import Register from "./Pages/Register";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hesap-olustur" element={<Register />} />
          {/* <Route path="/giris-yap" element={<Login />} /> */}
          <Route path="/giris-yap" element={<LoginRedux />} />
          <Route path="/teknoloji" element={<BlogTechnology />} />
          <Route path="/egitim" element={<BlogEdu />} />
          <Route path="/firmalar" element={<BlogCompany />} />
          <Route path="/haber-detay:id" element={<BlogDetails />} />
          <Route path="/kullanici-profili" element={<UserProfile />} />
          <Route path="/sss" element={<SSS />} />
          <Route path="/hakkimizda" element={<AboutUs />} />
          {/* <Route path="/is-ilanlari" element={<SearchJobScreen />} /> */}
          <Route path="profil" element={<UserProfile />} />
          {/* <Route path="/profil" element={<UserProfile />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
