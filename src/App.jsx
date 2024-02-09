import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import DetailsPage from "./components/pages/DetailsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:productId" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
