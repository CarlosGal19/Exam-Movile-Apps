import { useContext } from "react";
import { EditContext } from "../context/editProvider";

const useEdit = () => {
    return useContext(EditContext);
}

export default useEdit;
