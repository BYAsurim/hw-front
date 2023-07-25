import React, {useState} from "react";
import s from './Counter.module.css';


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


    return (<div className={s.header}>
            <div className={s.number}>
                <div className={error === 'error' ? s.error : ''}>
                    {
                        number
                    }
                </div>
            </div>
            <div className={s.buttons}>
                <button onClick={incHandler} disabled={number === 5}>inc
                </button>
                <button onClick={resetHandler} disabled={number === 0}>reset
                </button>
            </div>
        </div>
    )
}