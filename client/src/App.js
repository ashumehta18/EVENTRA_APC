import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import TrendingEvents from "./components/TrendingEvents";
import Features from "./components/Features";

// Pages
import Explore from "./pages/Explore";
import CreateEvent from "./pages/CreateEvent";
import Venues from "./pages/Venues";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventDetails from "./pages/EventDetails"; 

// Home Page Layout (your existing one)
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingEvents />
      <Features />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/event/:id" element={<EventDetails />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
