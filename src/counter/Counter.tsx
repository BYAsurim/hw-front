import React, {useState} from "react";
import s from './Counter.module.css';
import {SettingsCounter} from "./SettingsCounter";
import {СountingСounter} from "./СountingСounter";



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
            <СountingСounter
                number={number}
                error={error}
                startValue={startValue}
                maxValue={maxValue}
                incHandler={incHandler}
                resetHandler={resetHandler}
            />
            <SettingsCounter maxChangeHandler={maxChangeHandler}
                             startChangeHandler={startChangeHandler}
                             setClickHandler={setClickHandler}
                             startValue={startValue}
                             maxValue={maxValue}
            />

        </div>
    )
}

