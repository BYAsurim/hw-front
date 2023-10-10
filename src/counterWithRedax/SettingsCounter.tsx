import React from 'react';
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {maxValueAC, startValueAC} from "./state/setting-reduser";

type SettingsCounterPropsType = {



}

export const SettingsCounter = (props:SettingsCounterPropsType) => {

    const maxValue = useSelector<CountingRootStateType, number>(state => state.setting.maxValue)
    const startValue = useSelector<CountingRootStateType, number>(state => state.setting.startValue)
    const dispatch = useDispatch()

    const setClickHandler = () => {

    //     setNumber(startValue)
    //     setMaxValue(maxValue)
    //
    }
    const maxChangeHandler = (e: number) => {
        const action = maxValueAC(e)
        dispatch(action)
        // if (startValue < 0 || startValue >= e) {
        //     setError('write correct')
        // } else {
        //     setError('')
        // }
        // setMaxValue(e)
    }
    const startChangeHandler = (e: number) => {
        const action = startValueAC(e)
        dispatch(action)
        // if (e < 0 || e >= maxValue) {
        //     setError('write correct')
        // } else {
        //     setError('')
        // }
        // console.log('startValue:', startValue)
        // console.log('maxValue:', maxValue)
        // setStartValue(e)
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
                                    value={maxValue}
                                    callBack={(e: number) => {
                                   maxChangeHandler(e)
                                }}/>
                            </div>

                        </div>
                        <div className={s.max_value}>
                            start value:
                            <div className={s.input}>
                                <SuperInput
                                    value={startValue}
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
                                disabled={startValue >= maxValue || startValue < 0}
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