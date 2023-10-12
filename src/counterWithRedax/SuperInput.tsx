import React, {ChangeEvent, memo} from 'react';
import s from "./Counter.module.css";


type SuperInputPropsType = {
    callBack: (e: number) => void //ChangeEvent<HTMLInputElement>
    value: number
    className?:string
}

export const SuperInput = memo((props: SuperInputPropsType) => {
    console.log('SuperInput')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.valueAsNumber)
    }


    return (
        <div  >
            <input type='number'
                   value={props.value}
                   onChange={onChangeHandler}
                   className={s.root}
            />
        </div>
    );
});

