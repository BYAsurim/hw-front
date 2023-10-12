import React, {useCallback} from 'react';
import s from "./Counter.module.css";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {CountingType, incrementAC, resetAC} from "./state/counting-reduser";


export const СountingСounter = () => {
    console.log('СountingСounter')

    let state = useSelector<CountingRootStateType, CountingType>(state => state.count)

    let {number, error, maxValue, startValue} = state
    const dispatch = useDispatch()
    const incHandler = useCallback(() => {
        let action = incrementAC()
        dispatch(action)
    },[])
    const resetHandler = useCallback(() => {
        let action = resetAC()
        dispatch(action)
    },[])
    return (
        <div>
            <div className={s.header}>
                <div className={s.number}>
                    {error === 'write correct' ? <div>Write correct</div> : ''}
                    <div className={error === 'error' ? s.error : ''}>
                        {
                            number
                        }
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <SuperButton
                                text={'inc'}
                                callBack={incHandler}
                                disabled={number === maxValue || !!error}
                            />
                        </div>
                        <div className={s.button_reset}>
                            <SuperButton
                                text={'reset'}
                                callBack={resetHandler}
                                disabled={number === startValue}
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

