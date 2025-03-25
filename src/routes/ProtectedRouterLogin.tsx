import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "../lib/cookies";

function ProtectedRouterLogin() {
    const userToken = getCookie("userToken")

    const isLogin = getCookie("loggedIn")

    return userToken && isLogin ? (
        <Outlet />
    ) : (
        <Navigate to={"/"} />
    )
}

export default ProtectedRouterLogin;