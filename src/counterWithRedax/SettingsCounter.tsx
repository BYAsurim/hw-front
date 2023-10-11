import React from 'react';
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {maxValueAC, numberAC, startValueAC} from "./state/counting-reduser";


export const SettingsCounter = () => {

    const state = useSelector<CountingRootStateType, CountingRootStateType>(state => state)
    const dispatch = useDispatch()

    const setClickHandler = () => {
        const action = numberAC(state.count.startValue)
        dispatch(action)
    }
    const maxChangeHandler = (e: number) => {
        const action = maxValueAC(e)
        dispatch(action)

    }
    const startChangeHandler = (e: number) => {
        const action = startValueAC(e)
        dispatch(action)
    }


    return (
        <div>
            <div className={s.header}>
                <div>
                    <div className={s.buttons_inputs}>
                        <div className={s.max_value}>
                            max value:
                            <div className={s.input + ' ' + s.child_input}>
                                <SuperInput
                                    value={state.count.maxValue}
                                    callBack={(e: number) => {
                                        maxChangeHandler(e)
                                    }}/>
                            </div>
                        </div>
                        <div className={s.max_value}>
                            start value:
                            <div className={s.input}>
                                <SuperInput
                                    value={state.count.startValue}
                                    callBack={(e: number) => {
                                        startChangeHandler(e)
                                    }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <SuperButton
                                text={'set'}
                                callBack={setClickHandler}
                                disabled={state.count.startValue >= state.count.maxValue || state.count.startValue < 0}
                            />
                        </div>
                    </ThemeProvider>
                </div>
            </div>

        </div>
    );
};

const theme = createTheme({
    typography: {
        fontSize: 10,
    },
});