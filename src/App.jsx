import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className='background'>
          <ItemListContainer greeting={'Welcome!'}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;


