import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Personal from "./components/pages/Personal";
import Commercial from "./components/pages/Commercial";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personal" component={Personal} />
          <Route path="/commercial" component={Commercial} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
