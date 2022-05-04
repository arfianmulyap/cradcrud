import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
