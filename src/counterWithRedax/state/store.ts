import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {countingReduser} from "./counting-reduser";
import thunk from "redux-thunk";
import {loadState, saveState} from "./localStorage";


const rootReduser = combineReducers({
    count: countingReduser
})

const persistedState = loadState();
export const store = legacy_createStore(rootReduser, persistedState, applyMiddleware(thunk))
store.subscribe(() => {
    saveState({
        count: store.getState().count
    });
});


export type CountingRootStateType = ReturnType<typeof rootReduser>

// type AppDispatchType = ThunkDispatch<CountingRootStateType, unknown, AnyAction>
// export const thunkAppDispach = useDispatch<AppDispatchType>;


//@ts-ignore
window.store = store