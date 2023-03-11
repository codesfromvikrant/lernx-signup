import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import Joinus from "./components/joinus";
import Welcome from "./components/welcome";
import Recover from './components/recover';
import Reset from './components/reset';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Container />}>
            <Route index element={<Joinus />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="recover" element={<Recover />} />
            <Route path="reset" element={<Reset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;