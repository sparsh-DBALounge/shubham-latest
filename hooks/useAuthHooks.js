import { useState } from "react";
import axios from "@/services/axios";
import API from "@/services/endpoints";
import useValidationHooks from "./useValidationHooks";
import errorHandler from "@/utils/handler.utils";
import pageRoutes from "@/utils/pageRoutes";
import { useRouter } from "next/navigation";
import useActionDispatch from "@/hooks/useActionDispatch";
const crypto = require('crypto');

const authIninitalBody = {
    email: "",
    password: "",
    error: "",
}

const addUserIninitalBody = {
    email: "",
    password: "",
    createdBy: "",
    role: "",
    employee_code:null
}

const errorMessage = {
    EMAIL_ERROR: "Please enter a valid officially issued email address.",
    PASSWORD_ERROR: "Please enter a valid password."
}

const useAuthHooks = () => {

    const { setUser } = useActionDispatch();
    const router = useRouter()

    const { isEmailValid } = useValidationHooks()

    const [authBody, setAuthBody] = useState({ ...authIninitalBody })
    const [addUserBody, setAdduserBody] = useState({ ...addUserIninitalBody })

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
        setAdduserBody(prevState);
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
            const body = {}

            if (!isEmailValid(authBody.email)) {
                authBodyErrorHandler(errorMessage.EMAIL_ERROR)
                return
            }
            body.email = authBody.email
            body.password = AES256Encryptor(authBody.password)

            const { data } = await axios.post(API.signIn.post(), body)

            if (data.code == "1111") {
                setAuthBody(state => ({ ...state, error: data.msg || "" }))
                return
            }

           setUser({
                email: data.email,
                name: data.name,
            });

            router.push("/");
        } catch (error) {
            errorHandler(error)
        }
    }


    const fetchUsers = async () =>{
        try{
            const data = await axios.get(API.User())
            setUser(data)
          
        }
        catch(error){
         console.error(error)
        }
    }
    const addUserSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const body = {}
            if (!isEmailValid(addUserBody.email)) {
                addUserBodyErrorHandler(errorMessage.EMAIL_ERROR)
                return
            }
            body.email = addUserBody.email
            body.password = AES256Encryptor(addUserBody.password)

            const { data } = await axios.post(API.User.post(), body)

            if (data.code == "1111") {
                setAdduserBody(state => ({ ...state, error: data.msg || "" }))
                return
            } else {
                setAdduserBody({ ...singUpIninitalBody })
                alert("User Added successfully!")
                router.push("/");
            }

        } catch (error) {
            errorHandler(error)
        }
    }

    const logoutHandler = async () => {
       setUser({ email: "", name: "" });
        await axios.get(API.deleteCookie());
        router.push(pageRoutes.SIGN_IN_PAGE())
    }

    return {
        authBody, addUserBody, addUserChangeHandler, changeHandler, signinSubmitHandler, logoutHandler, addUserSubmitHandler
    };
};

export default useAuthHooks;