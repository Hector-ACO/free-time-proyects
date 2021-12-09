import logo from "./logo.svg";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </>
  );
}

export default App;
