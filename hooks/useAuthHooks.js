import { useState } from "react";
import axios from "@/services/axios";
import API from "@/services/endpoints";
import useValidationHooks from "./useValidationHooks";
import errorHandler from "@/utils/handler.utils";
import pageRoutes from "@/utils/pageRoutes";
import { useRouter } from "next/navigation";
import { useActionDispatch } from "./useActionDispatch";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const crypto = require('crypto');

const authIninitalBody = {
    emailId: "",
    password: "",
    error: "",
}

const addUserIninitalBody = {
    emailId: "",
    password: "",
    createdBy: "",
    userRoles: {
        role: ""
    },
    empCode: null
}

const errorMessage = {
    EMAIL_ERROR: "Please enter a valid officially issued email address.",
    PASSWORD_ERROR: "Please enter a valid password."
}

const useAuthHooks = () => {

    const { user } = useSelector((state) => state.auth)
    const { setUser } = useActionDispatch();
    const router = useRouter()

    const { isEmailValid } = useValidationHooks()

    const [authBody, setAuthBody] = useState({ ...authIninitalBody })
    const [addUserBody, setAddUserBody] = useState({ ...addUserIninitalBody })
    const [allUsers, setAllUsers] = useState()

    const authBodyErrorHandler = (error) => {
        setAuthBody(state => ({ ...state, error: error }))
    }
    const addUserBodyErrorHandler = (error) => {
        setAddUserBody(state => ({ ...state, error: error }))
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        const prevState = { ...authBody };
        prevState[name] = value;
        prevState.error = "";
        setAuthBody(prevState);
    }

    const addUserChangeHandler = (e) => {
        const { name, value } = e.target;
        const prevState = { ...addUserBody };
        prevState[name] = value;
        setAddUserBody(prevState);
    }

    const encryptionKey = process.env.ENCRYPTIONKEY

    function AES256Encryptor(plainText) {
        if (!plainText) {
            return plainText;
        }

        const key = Buffer.from(encryptionKey, 'utf8');
        const cipher = crypto.createCipheriv('aes-256-ecb', key, Buffer.alloc(0));
        let encrypted = cipher.update(plainText, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return Buffer.from(encrypted, 'hex').toString('hex');
    }

    const signinSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const { emailId, password } = authBody

            if (!isEmailValid(emailId)) {
                authBodyErrorHandler(errorMessage.EMAIL_ERROR)
                return
            }

            const { data } = await axios.post(API.signIn(), { emailId, password })

            setUser({ emailId: data.emailId });
            router.push("/");
        } catch (error) {
            errorHandler(error)
        }
    }

    const addUserSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const body = { ...addUserBody }
            if (!isEmailValid(body.emailId)) {
                addUserBodyErrorHandler(errorMessage.EMAIL_ERROR)
                return
            }


            body.createdBy = user.emailId
            console.log(body)
            return
            // body.password = AES256Encryptor(addUserBody.password)

            const { data } = await axios.post(API.addUser(), body)

            // if (data.code == "1111") {
            //     setAddUserBody(state => ({ ...state, error: data.msg || "" }))
            //     return
            // } 


            setAddUserBody({ ...singUpIninitalBody })
            toast("User Added successfully!")
            window.location.reload()

        } catch (error) {
            errorHandler(error)
        }
    }

    const logoutHandler = async () => {
        setUser({ emailId: "" });
        await axios.get(API.deleteCookie());
        router.push(pageRoutes.SIGN_IN_PAGE())
    }

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get(API.getAllUsers())
            setAllUsers(data.userdata)
        }
        catch (error) {
            console.error(error)
        }
    }


    return {
        authBody, addUserBody, addUserChangeHandler, changeHandler, signinSubmitHandler, logoutHandler,
        addUserSubmitHandler, fetchUsers, allUsers
    };
};

export default useAuthHooks;