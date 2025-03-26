import { useState, useRef } from "react";
import errorHandler from "@/utils/handler.utils";
import API from "@/services/endpoints";
import axios from "@/services/axios";
import { useDispatch, useSelector } from "react-redux";
import { setFile, removeFile } from "@/redux/slice/fileSlice";
import toast from "react-hot-toast";

export const useFileHooks = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const file = useSelector((state) => state.file.file);
    const [key, setKey] = useState(0)
    const [download, setDownload] = useState(false)

    const [uploadError, setUploadError] = useState("");

    const uploadFileChangeHandler = (e) => {
        const { files } = e.target;
        if (!files || files.length === 0) return;

        if (files[0].type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            toast("Wrong file format", { duration: 1000 });
            setUploadError("Wrong file format");
        } else {
            setUploadError("");
            dispatch(setFile(files[0]));
            setKey((prevKey) => prevKey + 1);
        }
    };

    const uploadUserFile = async (closeModel) => {
        if (!file) {
            toast.error("No file selected");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", file);

            const headers = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const { data } = await axios.post(API.uploadFile(), formData, headers);

            if (data === "File processed and saved successfully!") {
                toast.success(data);
                dispatch(removeFile());
                closeModel();
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                throw new Error(data);
            }

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.log("Upload Error:", error);

            const errorMessage =
                error?.response?.data?.message || error?.message || "File upload failed. Please try again.";

            errorHandler(errorMessage);
            toast.error(errorMessage);
            dispatch(removeFile());
            closeModel();
        }
    };

    const downloadFile = async () => {
        try {
            setDownload(true)
            const { data } = await axios.get(API.downloadFile(), {
                responseType: 'blob'
            })
            const url = window.URL.createObjectURL(new Blob([data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'userstatus_report.xlsx')
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
            setDownload(false)
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message || error?.message || "File upload failed. Please try again.";
            toast(errorMessage)
            setDownload(false)
        }
    }
    return { key, fileInputRef, uploadFileChangeHandler, uploadUserFile, uploadError, downloadFile, download };
};
