import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css";


type SuperInputPropsType = {
    callBack: (e: number) => void
    value: number
    className?:string
}

export const SuperInput = (props: SuperInputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.valueAsNumber)
    }

    // const finalClassName = `${cls.inputWrapper} ${props.className ? props.className: ''}`

    return (
        <div  >
            <input type='number'
                   value={props.value}
                   onChange={onChangeHandler}
                   className={s.root}
            />
        </div>
    );
};

