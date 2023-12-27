// rrd impotrt
import { Outlet } from "react-router-dom"
// components
import Header from "../components/Header"
import Footer from "../components/Footer"

function RootLayout() {
  return (
    <div className="site-max-container">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
