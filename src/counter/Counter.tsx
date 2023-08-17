import React, {useEffect, useState} from "react";
import s from './Counter.module.css';
import {SettingsCounter} from "./SettingsCounter";
import {СountingСounter} from "./СountingСounter";


//let numberAsString = localStorage.getItem('counterNumber')


export function Counter({propsData}: {propsData?: any[]}) {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(startValue + 1)
    let [number, setNumber] = useState<number>(startValue)
    //let [number, setNumber] = useState<number>(numberAsString ? JSON.parse(numberAsString) : 5)
    let [error, setError] = useState<string>('')


    // const [data,setData] = useState<any[]>([])
    //
    // console.log(data)
    //
    // useEffect(() => {
    //     propsData && setData(propsData)
    // }, [propsData])

    useEffect(() => {
        let numberAsString = localStorage.getItem('counterNumber')
        let maxValueAsString = localStorage.getItem('settingMaxValue')
        let startValueAsString = localStorage.getItem('settingStartValue')
        if (numberAsString) {
            let newNumber = JSON.parse(numberAsString)
            setNumber(newNumber)
        }
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
        }

    }, [])

    // useEffect(() => {
    //    // localStorage.setItem('counterNumber', JSON.stringify(number))
    //    // localStorage.setItem('settingMaxValue', JSON.stringify(maxValue))
    //     //localStorage.setItem('settingStartValue', JSON.stringify(startValue))
    // }, [number, maxValue, startValue])

    const incHandler = () => {
        setNumber(++number)
        localStorage.setItem('counterNumber', JSON.stringify(number))
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
        localStorage.setItem('settingMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('settingStartValue', JSON.stringify(startValue))

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

