// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
  
}

export default App;
