import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/home";
import PageAbout from "../pages/PageAbout";
import React from "react";

export default function RotutesPage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<PageAbout />} />
      </Routes>
    </BrowserRouter>
  );
}
