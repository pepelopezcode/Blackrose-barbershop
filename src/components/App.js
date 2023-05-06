import React from "react";
import { Route, Routes } from "react-router-dom";




import Header from "./Header";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Products from "./Products";
import Profile from "./Profile";


function App() {
  return (
    <div>
      <Header />
      
      <Routes >
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/products" element={<Products />} />
        
        <Route exact path="/profile-page" element={<Profile />} />


      </Routes>
      
    </div>
  );
}

export default App;
