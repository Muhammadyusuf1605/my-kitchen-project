// rrd impotrt
import { Outlet } from "react-router-dom";
// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderBg from "../components/HeaderBg";

function RootLayout() {
  return (
    <>
      <div className="site-max-container bg-slate-700">
        <Header />
      </div>
      <div className="site-max-container bg-slate-800">
        <HeaderBg/>
      </div>
      <main className="site-max-container bg-slate-900 py-8">
        <div className="site-container px-3">
          <Outlet />
        </div>
      </main>
      <div className="site-max-container bg-slate-700">
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
