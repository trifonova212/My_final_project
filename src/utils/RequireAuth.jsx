
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../redux/hook';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const auth = useAuth();
    if (!auth) {
        return <Navigate to='/'/>
        
    }
  	return children;
}
export default RequireAuth;