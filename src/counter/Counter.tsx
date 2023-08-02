import React, {useState} from "react";
import s from './Counter.module.css';
import {Button, createTheme, ThemeProvider} from "@mui/material";


export function Counter() {

    let [number, setNumber] = useState<number>(0)
    let [error, setError] = useState<string>('')
    const incHandler = () => {
        setNumber(++number)

        if (number === 5) {
            setError('error')
        }
    }
    const resetHandler = () => {
        setNumber(0)
        setError('')
    }


    return (
        <div className={s.main}>
            <div className={s.header}>
                <div className={s.number}>
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
                                    disabled={number === 5}>inc</Button>
                        </div>
                        {/*<button onClick={incHandler} disabled={number === 5}>inc*/}
                        {/*</button>*/}
                        <div className={s.button_reset}>
                            <Button size={"small"} variant="outlined" onClick={resetHandler}
                                    disabled={number === 0}>reset</Button>
                        </div>
                        {/*<button onClick={resetHandler} disabled={number === 0}>reset*/}
                        {/*</button>*/}
                    </ThemeProvider>
                </div>
            </div>

            <div className={s.header}>
                <div >
                    <div className={s.buttons_inputs}>
                        <div  className={s.max_value}>
                            max value:

                            <input className={s.input} type = 'number'/>

                        </div>
                        <div className={s.max_value}>
                            start value:
                            <input className={s.input}  type = 'number' />
                        </div>
                    </div>
                </div>
                <div className={s.buttons}>
                    <ThemeProvider theme={theme}>
                        <div className={s.button_inc}>
                            <Button size={"small"} variant="outlined" onClick={()=>{}}
                                    disabled={number === 5}>set</Button>
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