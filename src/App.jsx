import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClubHub from "./Components/ClubHub/Clubhub";
import ProfileForm from "./Components/Profile/ProfieForm";

function App() {
  return (
    <Routes>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/clubhub" element={<ClubHub />} />
      <Route path="/" element={<ProfileForm />} />
    </Routes>
  );
}

export default App;
