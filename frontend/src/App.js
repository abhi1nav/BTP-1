import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import TopicScreen from "./Screens/TopicScreen/TopicScreen";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Home /> */}
      <Route path='/' component={Home} exact />
      <Route path='/Part1' component={TopicScreen} exact></Route>
      <Footer />
    </Router>
  );
}

export default App;
