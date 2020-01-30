import React from 'react';
import { Router } from "@reach/router"
import Home from "./pages/Home";
// import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
        <Home path="/" />
        <FormPage path="form" />
    </Router>
  );
}

export default App;
