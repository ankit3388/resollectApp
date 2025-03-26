import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <Router className="w-full h-full border border-black">
    <Header />
    <div className="p-6">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
