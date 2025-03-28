import React from "react";
import "../styles/AuthPage/authPage.css"

const AuthPage = ({ mode }) => {
    const isLogin = mode === "login";

    return (
        <div className="auth_container">
            <h1>{isLogin ? "Sign In" : "Register"}</h1>
            <form>
                {!isLogin && (
                    <input type="text" placeholder="Username" />
                )}

                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">
                    {isLogin ? "Sign In" : "Register"}
                </button>
            </form>
        </div>
    );
};

export default AuthPage;