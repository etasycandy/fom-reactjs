import { BrowserRouter, Routes, Route } from "react-router-dom";
// import IntroPage from "./pages/IntroPage";
import HomePage from "./pages/HomePage";
import PharmacyPage from "./pages/PharmacyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dial from "./components/Dial";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen h-fit bg-[#f8f9fd]">
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pharmacy/:slug" element={<PharmacyPage />} />
          <Route path="/product/:slug" element={<DetailProduct />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
      {/* Speed Dial */}
      <div className="fixed bottom-8 right-8 z-30">
        <Dial />
      </div>
    </BrowserRouter>
  );
}

export default App;
