// src/Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
    const responseGoogle = async (response) => {
        const { tokenId } = response;
        try {
            const res = await fetch('http://localhost:5000/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: tokenId }),
            });

            const data = await res.json();
            console.log(data);
            // Handle successful authentication (e.g., redirect, store user info)
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    const handleFailure = (response) => {
        console.error("Login failed: ", response);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login with Google</h2>
                <GoogleLogin
                    clientId="YOUR_CLIENT_ID" // Replace with your client ID
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
};

export default Login;