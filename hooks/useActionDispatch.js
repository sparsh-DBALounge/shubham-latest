import { setUser } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";

const useActionDispatch = () =>{
    const dispatch = useDispatch()

    return({
        setUser:(e) => dispatch(setUser(e))
    })
}
export default useActionDispatch