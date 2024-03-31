import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/products";
// import { Router, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import ErrorBoundary from "./components/ErrorBoundary";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Router exact path="/" component={Home} />
        <Router exact path="/products" component={Products} />
        <Router exact path="/products/:id" component={Products} />
        <Home />
        <Products />
        {/* <ErrorBoundary /> */}
      </Router>
    </>
  );
}

export default App;
