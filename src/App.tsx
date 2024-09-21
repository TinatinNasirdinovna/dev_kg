import React from "react";
import "./App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Header/>
      <Main />
      <Footer />
      <ToastContainer />
    </div>
    </QueryClientProvider>
  );
}

export default App;
