import {combineReducers, legacy_createStore} from "redux";
import {countingReduser} from "./counting-reduser";
import {settingReduser} from "./setting-reduser";


const rootReduser = combineReducers({
    count: countingReduser,
   setting: settingReduser
})

export const store = legacy_createStore(rootReduser)

export type CountingRootStateType = ReturnType<typeof rootReduser>