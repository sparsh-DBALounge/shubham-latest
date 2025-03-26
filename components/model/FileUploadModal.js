import { useFileHooks } from "@/hooks/useFileHooks";
import { useSelector, useDispatch, } from "react-redux";
import { removeFile } from "@/redux/slice/fileSlice";

const FileUploadModel = ({ closeModel }) => {
    const { uploadUserFile } = useFileHooks();
    const { file } = useSelector((state) => state.file);
    const dispatch = useDispatch()

    const handleModalClose = () => {
        closeModel()
        dispatch(removeFile())
    }

    if (!file) {
        return (
            <div className="confirmation-prompt">
                <h2>No File Selected</h2>
                <button onClick={closeModel}>Close</button>
            </div>
        );
    }

    return (
        <div className="confirmation-prompt">
            <p style={{ fontSize: 18, fontWeight: 700 }}>File Selected: {file.name}</p>
            <p style={{ fontSize: 14 }}>Are you sure you want to upload this file?</p>
            <div>
                <button onClick={handleModalClose}>Cancel</button>
                <button onClick={() => uploadUserFile(closeModel)} className="confirm">
                    Upload
                </button>
            </div>
        </div>
    );
};

export default FileUploadModel;
