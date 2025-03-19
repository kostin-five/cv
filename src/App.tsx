// import { useState } from "react";
import "./App.css";

import Header from "./components/Header/index.tsx";
import About from "./components/About/index.tsx";
import Experience from "./components/Experiance/index.tsx";
import Education from "./components/Education/index.tsx";
import Skills from "./components/Skills/index.tsx";
import Contacts from "./components/Contacts/index.tsx";
import { education, about, skills } from "./data.ts";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Header />
        <About {...about} />
        <Education {...education} />
        <Skills {...skills} />
        <Contacts />
      </div>
      <Experience />
    </>
  );
}
