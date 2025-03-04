import "./App.css";
import { Menu } from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import { FormNewPrice } from "./components/FormNewPrice";
import { ProductTable } from "./components/ProductTable";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/productos" element={<ProductTable />}></Route>
      <Route path="/agregar" element={<FormNewPrice />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;

