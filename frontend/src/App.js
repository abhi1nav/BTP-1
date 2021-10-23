import react from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
