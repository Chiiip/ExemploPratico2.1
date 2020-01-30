import React from "react";
import logo from '../logo.svg';
import '../App.css';
import { Link } from "@reach/router";

const Home = () => (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clique <Link to="/form">aqui</Link> para o formulário
        </p>
      </header>
</div>);

export default Home;