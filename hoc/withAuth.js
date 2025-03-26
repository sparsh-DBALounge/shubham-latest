"use client";


import { useSelector } from "react-redux";
import { useEffect } from "react";
import pageRoutes from "@/utils/pageRoutes";
import { redirect } from "next/navigation";

export default function withAuth(Component) {
    return function AuthenticatedComponent(props) {

        const { user } = useSelector((state) => state.auth);

        useEffect(() => {
            if (typeof window !== "undefined" && !user?.emailId) {
                redirect(pageRoutes.SIGN_IN_PAGE())
            }
        }, [user.emailId]);

        if (user.emailId) {
            return <Component {...props}>{props.children}</Component>;
        }
        return null;
    };
}
