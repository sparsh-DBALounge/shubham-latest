"use client";


import { useSelector } from "react-redux";
import { useEffect } from "react";
import pageRoutes from "@/utils/pageRoutes";
import { redirect } from "next/navigation";

export default function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const { user } = useSelector((state) => state.authSlice);

        useEffect(() => {
            if (typeof window !== "undefined" && !user?.email) {
                redirect(pageRoutes.SIGN_IN_PAGE())
            }
        }, [user.email]);

        if (user.email) {
            return <Component {...props} />;
        }
        return null;
    };
}
