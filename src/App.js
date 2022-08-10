import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";

import Topo from "./pages/Topo";
import Login from "./pages/Login/Login";
import Rifa from "./pages/Rifa/Rifa";
import Cadastro from "./pages/Cadastro/Cadastro";
import Numeros from "./pages/Numeros/Numeros";

export default function App() {
  const [codigo, setCodigo] = useState("");
  return (
    <BrowserRouter>
      <Topo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rifa" element={<Rifa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/numeros" element={<Numeros />} />
      </Routes>
    </BrowserRouter>
  );
}
