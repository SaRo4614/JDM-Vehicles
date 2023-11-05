//CSS
import "./App.css";
//COMPONENTS
import NavBar from "./components/NavBar/NavBar";
//ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//CONTEXT
import CartProvider from "./context/CartContext";
//PAGES
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import FormPage from "./pages/FormPage/FormPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
          <div className="background">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/category/:type" element={<CategoryPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/form" element={<FormPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
