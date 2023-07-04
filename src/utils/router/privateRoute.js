import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../../redux/hook";


const PrivateRoute = () => {
    const auth = useAuth()
    console.log(auth)
    return (
       auth ? <Outlet/> : <Navigate to='authorization' />
    )
}

export default PrivateRoute