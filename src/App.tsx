import axiosInstance from "@api";
import PC from "@components/PC";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_CONFIG } from "./redux/action";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance.get("/config/config.json")
            .then(d => {
                dispatch({
                    type: SET_CONFIG,
                    config: d.data
                })
            })
            .catch(e => {
                console.error(e);
            })
    })
    return (
        <PC />
    )
}

export default App;
