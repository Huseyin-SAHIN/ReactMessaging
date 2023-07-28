import React, { useEffect, useState } from "react";
import Connection from "./Connection";
import LoginRight from "./LoginRight";
import LoginLeft from "./LoginLeft"
import "../style/Login.css"

function Login() {

    const [isLoginControl, setIsLoginControl] = useState(localStorage.getItem("access_token") ? true : false);

    if (isLoginControl) {
        return <Connection setIsLoginControl={setIsLoginControl} />
    } else {
        return (
            <div className="container">
                <LoginLeft />
                <LoginRight setIsLoginControl={setIsLoginControl} />
            </div>
        )
    }
}

export default Login