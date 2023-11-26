import IConfig from "@interface/IConfig";
import { Action, SET_CONFIG } from "./action";
import { createStore } from "redux";

const init_config: IConfig = {
    header: {
        height: 0,
        minHeight: 0,
        maxHeight: 0,
        fontSize: 0,
        minFontSize: 0,
        maxFontSize: 0
    }
}

function reducer(config: IConfig = init_config, action: Action) {
    let newConfig = {...config};

    switch(action.type) {
        case SET_CONFIG:
            newConfig = action.data;
    }

    return newConfig;
}

const store = createStore(reducer);
export {store};