import IConfig from "@interface/IConfig";

export const SET_CONFIG = "SET_CONFIG" as const;
export const set_config = (config: IConfig) => {
    return {
        type: SET_CONFIG,
        data: config
    }
}


export type Action =
    | ReturnType<typeof set_config>    