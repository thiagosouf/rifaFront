import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home";

// import LoginPage from "./LoginPage";
// import SignUpPage from "./SignUpPage.js";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}