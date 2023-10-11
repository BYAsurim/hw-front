import {combineReducers, legacy_createStore} from "redux";
import {countingReduser} from "./counting-reduser";



const rootReduser = combineReducers({
    count: countingReduser
})

export const store = legacy_createStore(rootReduser)

export type CountingRootStateType = ReturnType<typeof rootReduser>