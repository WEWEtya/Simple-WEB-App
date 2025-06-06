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

            if (isLogin) {
                if (response.data.token) {
                    localStorage.setItem("authToken", response.data.token);
                    localStorage.setItem("user", JSON.stringify({
                        email: response.data.email,
                        username: response.data.username
                    }));
                    setIsLoggedIn(true);
                    alert("Login successful");
                } else {
                    alert("Login failed: No token received.");
                }
            } else {
                // Registration
                alert(response.data || "Registration successful");
            }
        } catch (error) {
            console.log(error);
            // Show a more helpful error message
            if (error.response && error.response.data) {
                // If the backend sent a string, show it. If it's an object, stringify it.
                alert(typeof error.response.data === "string"
                    ? error.response.data
                    : JSON.stringify(error.response.data));
            } else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="auth_container">
            <h1>{isLogin ? "Sign In" : "Register"}</h1>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                )}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">
                    {isLogin ? "Sign In" : "Register"}
                </button>
            </form>
        </div>
    );
};

export default AuthPage;