import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import TopicScreen from "./Screens/TopicScreen/TopicScreen";
import SignupScreen from "./Screens/UserScreen/SignupScreen";
import LoginScreen from "./Screens/UserScreen/LoginScreen";
import ContactUs from "./Components/ContactUs/ContactUs";
import AdminDashBoard from "./Components/DashBoard/AdminDashBoard";

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Home /> */}
      <Route path='/' component={Home} exact />
      <Route path='/Part1' component={TopicScreen} exact></Route>
      <Route path='/sign-up' component={SignupScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/services' component={AdminDashBoard} />
      <Footer />
    </Router>
  );
}

export default App;
