import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home";
import { Product } from "../components/product";
import { SignUp } from "../components/signup";
import { Login } from "../components/login";
import { Cart } from "../components/cart";
import { Navbar } from "../components/navbar";
import { Skills } from "../components/skillsDisplayed";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/skillsDisplayed" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
