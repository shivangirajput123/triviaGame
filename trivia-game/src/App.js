import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Game from "./components/TriviaGame";
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="component/game" element={<Game />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
