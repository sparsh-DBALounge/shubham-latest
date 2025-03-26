import { useDispatch } from "react-redux";
import { setUser, removeUser } from "@/redux/slice/authSlice";
import { setDashboardData } from "@/redux/slice/dashboardSlice";

export const useActionDispatch = () => {
    const dispatch = useDispatch();

    return ({
        setUser: (payload) => dispatch(setUser(payload)),
        removeUser: (payload) => dispatch(removeUser()),

        setDashboardData: (payload) => dispatch(setDashboardData(payload))
    })

}

