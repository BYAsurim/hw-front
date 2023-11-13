import {CountingRootStateType} from "./store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('count-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: CountingRootStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('count-state', serializedState);
    } catch {
        // ignore write errors
    }
};