import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col custom-text">
      <Header />

      <main className="flex-1 bg-primary">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
