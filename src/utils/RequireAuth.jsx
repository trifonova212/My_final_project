
import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/hook';

const RequireAuth = ({children}) => {
    const auth = useAuth();
    if (!auth) {
        return <Navigate to='/'/> 
    }
  	return children;
}
export default RequireAuth;