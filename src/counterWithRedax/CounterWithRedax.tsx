import React, {useEffect, useState} from "react";
import s from './Counter.module.css';
import {SettingsCounter} from "./SettingsCounter";
import {СountingСounter} from "./СountingСounter";
import {useDispatch, useSelector} from "react-redux";
import {CountingRootStateType} from "./state/store";
import {incrementAC, resetAC} from "./state/counting-reduser";


//let numberAsString = localStorage.getItem('counterNumber')


export function CounterWithRedax() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(startValue + 10)
    // let [number, setNumber] = useState<number>(startValue)
    //let [number, setNumber] = useState<number>(numberAsString ? JSON.parse(numberAsString) : 5)
    let [error, setError] = useState<string>('')




    return (
        <div className={s.main}>



            <СountingСounter

                error={error}
                startValue={startValue}
                maxValue={maxValue}

            />
            <SettingsCounter
            />

        </div>
    )
}

