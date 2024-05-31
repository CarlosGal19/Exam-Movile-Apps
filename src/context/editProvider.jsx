import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [edit, setEdit] = useState(true);
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [grade, setGrade] = useState('');
    const [ arrayData, setArrayData ] = useState([]);
    const [ index, setIndex ] = useState('');
    const [alert, setAlert] = useState(false);


    return (
        <EditContext.Provider value={{ edit, setEdit, name, setName, major, setMajor, grade, setGrade, alert, setAlert, arrayData, setArrayData, index, setIndex }}>
        {children}
        </EditContext.Provider>
    );
    };

EditProvider.propTypes = {
    children: PropTypes.node.isRequired
};
