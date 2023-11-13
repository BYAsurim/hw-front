import React, {useCallback} from 'react';
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {numberAC, setSettingAC} from "./state/counting-reduser";


export const SettingsCounter = () => {
    console.log('SettingsCounter')
    const startValue = useSelector<CountingRootStateType, number>(state => state.count.startValue)
    const maxValue = useSelector<CountingRootStateType, number>(state => state.count.maxValue)
    const dispatch = useDispatch()
    // const dispatchThank = thunkAppDispach()

    const setClickHandler = useCallback(() => {
        const action = numberAC()
        dispatch(action)
        // dispatchThank(setSettingTC())
    }, [])


    // const maxChangeHandler = useCallback((e: number) => {
    //     const action = maxValueAC(e)
    //     dispatch(action)
    //
    // },[])
    const maxChangeHandler = useCallback((e: number) => {
        const action = setSettingAC('maxValue', e)
        dispatch(action)

    }, [])
    // const startChangeHandler = useCallback((e: number) => {
    //     const action = startValueAC(e)
    //     dispatch(action)
    // },[])
    const startChangeHandler = useCallback((e: number) => {
        const action = setSettingAC('startValue', e)
        dispatch(action)
    }, [])


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
                                    callBack={maxChangeHandler}/>
                            </div>
                        </div>
                        <div className={s.max_value}>
                            start value:
                            <div className={s.input}>
                                <SuperInput
                                    value={startValue}
                                    callBack={startChangeHandler}/>
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