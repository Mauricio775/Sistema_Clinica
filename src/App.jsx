import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import RecepcionArchivo from "./pages/RecepcionArchivo";
import Nutricion from "./pages/Nutricion";

function App() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/archivo" element={<RecepcionArchivo />} />
          <Route path="/nutricion" element={<Nutricion />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;