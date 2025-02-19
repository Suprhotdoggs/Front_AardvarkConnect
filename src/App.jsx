import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClubHub from "./Components/ClubHub/Clubhub";
import ProfileForm from "./Components/Profile/ProfieForm";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

function App() {
  return (
    <Routes>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/clubhub" element={<ClubHub />} />
      <Route path="/profile" element={<ProfileForm />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
