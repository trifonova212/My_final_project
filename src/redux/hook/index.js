import { useSelector } from "react-redux"


export const useAuth = () => {
        if (localStorage.getItem('token')){
                return true
        }else {
                return false
        }
}
