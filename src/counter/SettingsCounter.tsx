import React from 'react';
import s from "./Counter.module.css";
import {SuperInput} from "./SuperInput";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";

type SettingsCounterPropsType = {
    maxChangeHandler:(e: number) =>void
    startChangeHandler:(e: number) =>void
    setClickHandler: ()=>void
    startValue:number
    maxValue:number


}

export const SettingsCounter = (props:SettingsCounterPropsType) => {
    return (
        <div>
            <div className={s.header}>
                <div>
                    <div className={s.buttons_inputs}>
                        <div className={s.max_value}>
                            max value:
                            <div className={s.input + ' ' + s.child_input}>
                                <SuperInput
                                    value={props.maxValue}
                                    callBack={(e: number) => {
                                    props.maxChangeHandler(e)
                                }}/>
                            </div>

                        </div>
                        <div className={s.max_value}>
                            start value:
                            <div className={s.input}>
                                <SuperInput
                                    value={props.startValue}
                                    callBack={(e: number) => {
                                    props.startChangeHandler(e)
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
                                callBack={props.setClickHandler}
                                disabled={props.startValue >= props.maxValue || props.startValue < 0}
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