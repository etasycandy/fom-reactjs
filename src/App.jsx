import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./pages/HomePage";
import PharmacyPage from "./pages/PharmacyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dial from "./components/Dial";
import DetailProduct from "./pages/DetailProduct";
import CategoriesPage from "./pages/CategoriesPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import PurchasesPage from "./pages/PurchasesPage";

const MainLayout = () => {
  return (
    <>
      <div className="w-full min-h-screen h-fit bg-[#f8f9fd]">
        <Header />
        <Outlet />
        <Footer />
      </div>
      {/* Speed Dial */}
      <div className="fixed bottom-8 right-8 z-30">
        <Dial />
      </div>
    </>
  );
};

const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen h-fit bg-[#f8f9fd] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/fom-reactjs" element={<HomePage />} />
            <Route
              path="/fom-reactjs/pharmacy/:slug"
              element={<PharmacyPage />}
            />
            <Route
              path="/fom-reactjs/categories/:slug"
              element={<CategoriesPage />}
            />
            <Route
              path="/fom-reactjs/product/:slug"
              element={<DetailProduct />}
            />
            <Route path="/fom-reactjs/cart" element={<CartPage />} />
            <Route path="/fom-reactjs/purchases" element={<PurchasesPage />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/fom-reactjs/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
