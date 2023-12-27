import { Navigate } from "react-router-dom";

function ProtectecRoutes({ children, user }) {
  if (user) {
    return children;
  } else {
    return children
    // return <Navigate to="/" />;
  }
}

export default ProtectecRoutes;
