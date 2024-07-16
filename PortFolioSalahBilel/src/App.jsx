import Footer from "./components/5.footer/Footer";
import Header from "./components/1.header/header";
import Hero from "./components/2.hero/Hero";
import Main from "./components/3.main/Main";
import ContactUs from "./components/4.contactUs/ContactUs";

import { useState } from "react";

// import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="divider" />
        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />
        <ContactUs />
        <div className="divider" />
        <Footer />
      </div>
    </>
  );
}

export default App;
