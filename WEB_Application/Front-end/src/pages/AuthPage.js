import React, { useState } from "react";
import axios from "axios";
import "../styles/AuthPage/authPage.css"

const AuthPage = ({ mode, setIsLoggedIn }) => {
    const isLogin = mode === "login";
    const [formData, serFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        serFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const endpoint = isLogin
             ? "http://localhost:8080/api/auth/login"
             : "http://localhost:8080/api/auth/register";

            const payload = isLogin
             ? { email: formData.email, password: formData.password }
             : formData;

            const response = await axios.post(endpoint, payload);

            if( isLogin && response.data.token) {
                localStorage.setItem("authToken", response.data.token);
                localStorage.setItem("user", MediaKeySession.stringify({
                    email: response.data.email,
                    username: response.data.username
                }));
                setIsLoggedIn(true);
                alert("Login successful");
            } else if (!isLogin) {
                alert("Registration successful");
            }
        } catch (error) {
            alert(error.response?.data || "Something went wrong");
        }
    };

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