import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import ListItem from './list/listItem';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './list/List';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
   <Header/>
    <div className="app-body">
      <List/>
    </div>
    <Footer/>
  </div>
);
