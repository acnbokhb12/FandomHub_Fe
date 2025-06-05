import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated() ? element : <Navigate to="/signin" replace />;
};

export default PrivateRoute;