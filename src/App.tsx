import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
