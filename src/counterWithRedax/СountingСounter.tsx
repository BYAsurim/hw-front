import React from 'react';
import s from "./Counter.module.css";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {incrementAC, resetAC} from "./state/counting-reduser";


export const СountingСounter = () => {

    let state = useSelector<CountingRootStateType, CountingRootStateType>(state => state)
    const dispatch = useDispatch()
    const incHandler = () => {
        let action = incrementAC()
        dispatch(action)
    }
    const resetHandler = () => {
        let action = resetAC()
        dispatch(action)
    }
    return (
        <div>
            <div className={s.header}>
                <div className={s.number}>
                    {state.count.error === 'write correct' ? <div>Write correct</div> : ''}
                    <div className={state.count.error === 'error' ? s.error : ''}>
                        {
                            state.count.number
                        }
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <SuperButton
                                text={'inc'}
                                callBack={incHandler}
                                disabled={state.count.number === state.count.maxValue || !!state.count.error}
                            />
                        </div>
                        <div className={s.button_reset}>
                            <SuperButton
                                text={'reset'}
                                callBack={resetHandler}
                                disabled={state.count.number === state.count.startValue}
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

