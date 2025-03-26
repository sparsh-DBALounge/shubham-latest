"use client";

import { useEffect } from "react";
import { useFileHooks } from "@/hooks/useFileHooks";
import { useSelector } from "react-redux";
import ModelHOC from "@/hoc/modelHOC";

const UploadUserFile = (props) => {
    const { key, fileInputRef, uploadFileChangeHandler, uploadError } = useFileHooks();
    const file = useSelector((state) => state.file.file);

    useEffect(() => {
        if (file) {
            props.openModel({ key: "UPLOADFILE" });
        }
    }, [file]);

    return (
        <div>
            <form className="upload-file__container">
                <input
                    key={key}
                    style={{ display: "none" }}
                    type="file"
                    name="file"
                    accept=".xlsx"
                    ref={fileInputRef}
                    onChange={uploadFileChangeHandler}
                />

                <button
                    type="button"
                    className="dashboard-btn"
                    onClick={() => fileInputRef.current?.click()}
                >
                    Select File
                </button>

                {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}
            </form>
        </div>
    );
};

export default ModelHOC(UploadUserFile);
