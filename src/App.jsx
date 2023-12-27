// rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layout
import RootLayout from "./layout/RootLayout";
// hooks
import { useGlobalContext } from "./hooks/useGlobalContext";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
// ProtectedRoutes import
import ProtectecRoutes from "./components/ProtectecRoutes";

function App() {
  const { user, isAuthReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectecRoutes user={user}>
          <RootLayout />
        </ProtectecRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
