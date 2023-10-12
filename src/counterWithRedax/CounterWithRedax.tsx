import React from "react";
import s from './Counter.module.css';
import {SettingsCounter} from "./SettingsCounter";
import {СountingСounter} from "./СountingСounter";


export function CounterWithRedax() {
    console.log('CounterWithRedax')

    return (
        <div className={s.main}>
            <СountingСounter
            />
            <SettingsCounter
            />

        </div>
    )
}

