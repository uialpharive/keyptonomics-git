import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "../lib/cookies";

function ProtectedRouter() {
    const userToken = getCookie("userToken")

    const isLogin = getCookie("loggedIn")

    return userToken && isLogin ? (
        <Navigate to={"/home"} />
    ) : (
        <Outlet />
    )
}

export default ProtectedRouter;