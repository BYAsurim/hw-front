import React from 'react';
import s from "./Counter.module.css";
import {createTheme, ThemeProvider} from "@mui/material";
import {SuperButton} from "./SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import { incrementAC, resetAC} from "./state/counting-reduser";


type СountingСounterPropsType = {
    error:string
    startValue:number
    maxValue:number
}

export const СountingСounter = (props:СountingСounterPropsType) => {

    let number = useSelector<CountingRootStateType, number>(state =>  state.count.number)
    let error = useSelector<CountingRootStateType, string>(state => state.count.error)
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
                                disabled={number === props.maxValue}
                            />
                        </div>
                        <div className={s.button_reset}>
                            <SuperButton
                                text={'reset'}
                                callBack={resetHandler}
                                disabled={number === props.startValue}
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

