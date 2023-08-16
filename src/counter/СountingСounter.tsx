import React from 'react';
import s from "./Counter.module.css";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";


type СountingСounterPropsType = {
    number:number
    error:string
    startValue:number
    maxValue:number
    incHandler:()=>void
    resetHandler:()=>void
}

export const СountingСounter = (props:СountingСounterPropsType) => {
    return (
        <div>
            <div className={s.header}>
                <div className={s.number}>
                    {props.error === 'write correct' ? <div>Write correct</div> : ''}
                    <div className={props.error === 'error' ? s.error : ''}>
                        {
                            props.number
                        }
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <SuperButton
                                text={'inc'}
                                callBack={props.incHandler}
                                disabled={props.number === props.maxValue}
                            />
                        </div>
                        <div className={s.button_reset}>
                            <SuperButton
                                text={'reset'}
                                callBack={props.resetHandler}
                                disabled={props.number === props.startValue}
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

