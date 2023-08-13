import React, {useState} from "react";
import s from './Counter.module.css';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import {SuperInput} from "./SuperInput";



export function Counter() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(startValue + 1)
    let [number, setNumber] = useState<number>(startValue)
    let [error, setError] = useState<string>('')

    const incHandler = () => {
        setNumber(++number)

        if (number === maxValue) {
            setError('error')
        }
    }
    const resetHandler = () => {
        setNumber(startValue)
        setError('')
    }
    const setClickHandler = () => {
        setNumber(startValue)
        setMaxValue(maxValue)

    }

    // const maxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     if (startValue < 0 || startValue >= event.currentTarget.valueAsNumber) {
    //         setError('write correct')
    //     } else {
    //         setError('')
    //     }
    //     setMaxValue(event.currentTarget.valueAsNumber)
    // }
    const maxChangeHandler = (e: number) => {
        if (startValue < 0 || startValue >= e) {
            setError('write correct')
        } else {
            setError('')
        }
        setMaxValue(e)
    }
    const startChangeHandler = (e: number) => {
        if (e < 0 || e >= maxValue) {
            setError('write correct')
        } else {
            setError('')
        }
        console.log('startValue:', startValue)
        console.log('maxValue:', maxValue)
        setStartValue(e)


    }


    return (
        <div className={s.main}>
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
                            <Button size={"small"} variant="outlined" onClick={incHandler}
                                    disabled={number === maxValue}>inc</Button>
                        </div>
                        <div className={s.button_reset}>
                            <Button size={"small"} variant="outlined" onClick={resetHandler}
                                    disabled={number === startValue}>reset</Button>

                        </div>


                    </ThemeProvider>
                </div>
            </div>

            <div className={s.header}>
                <div>
                    <div className={s.buttons_inputs}>
                        <div className={s.max_value}>
                            max value:
                            <div className={s.input + ' ' + s.child_input}>
                                {/*<input  type='number'*/}
                                {/*       onChange={maxChangeHandler}*/}
                                {/*/>*/}
                                <SuperInput callBack={(e: number) => {
                                    maxChangeHandler(e)
                                }}/>
                            </div>

                        </div>
                        <div className={s.max_value}>
                            start value:
                            {/*<input className={s.input} type='number'*/}
                            {/*       onChange={startChangeHandler}*/}
                            {/*/>*/}
                            <div className={s.input}>
                                <SuperInput callBack={(e: number) => {
                                    startChangeHandler(e)
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <Button size={"small"} variant="outlined" onClick={setClickHandler}
                                    disabled={startValue >= maxValue || startValue < 0}
                            >set</Button>
                        </div>

                    </ThemeProvider>
                </div>
            </div>

        </div>
    )
}

const theme = createTheme({
    typography: {
        fontSize: 10,
    },
});