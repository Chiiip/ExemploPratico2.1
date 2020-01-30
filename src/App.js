import React, { Suspense, lazy } from 'react';
import { Router } from "@reach/router"
// import Home from "./pages/Home";
// import FormPage from "./pages/FormPage";

const Home = lazy(() => import('./pages/Home'));
const FormPage = lazy(() => import('./pages/FormPage'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
    <Router>
        <Home path="/" />
        <FormPage path="form" />
    </Router>
    </Suspense>
  );
}

export default App;
