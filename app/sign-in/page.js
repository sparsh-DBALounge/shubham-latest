"use client";


import React from "react";
import useAuthHooks from "@/hooks/useAuthHooks";
import { icons } from "@/env/icons"

const SignIn = () => {
    const { authBody, changeHandler, signinSubmitHandler } = useAuthHooks();

    return (
        <div className="container">
            <div className="login-page-outer-container">
                <form
                    onSubmit={signinSubmitHandler}
                    className="login-form-inner-container"
                >
                    <img src={icons.BRAND_LOGO} alt="Logo" />

                    <div>
                        <label htmlFor="email" style={{ marginBottom: '5px' }}>
                            Email <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={authBody.email}
                            onChange={changeHandler}
                            autoComplete="true"
                            required
                        />
                    </div>

                    <div className="mt-2">
                        <label htmlFor="password" style={{ marginBottom: '5px' }}>
                            Password <span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            autoComplete="true"
                            className="form-control"
                            value={authBody.password}
                            onChange={changeHandler}
                            required
                        />
                    </div>

                    <p className="error">{authBody.error}</p>

                    <div className="mt-3">
                        <button type="submit" style={{ backgroundColor: '#015495', color: '#fff' }}
                            className="btn w-100">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn