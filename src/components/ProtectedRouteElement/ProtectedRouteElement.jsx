import { Navigate } from "react-router-dom";

function ProtectedRouteElement({ element: Component, ...props }) {
  const logged = localStorage.getItem('loggedIn') || props.loggedIn
  return (
    logged ? <Component {...props} /> : <Navigate to='/signin' replace />
  );
}

export default ProtectedRouteElement;