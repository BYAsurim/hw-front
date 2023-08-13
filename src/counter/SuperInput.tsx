import React, {ChangeEvent} from 'react';
import s from "./Counter.module.css";


type SuperInputPropsType = {
    callBack: (e: number) => void
}
export const SuperInput = (props: SuperInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.callBack( e.currentTarget.valueAsNumber)
    }

    return (
        <div>
            <input type='number'
                   onChange={onChangeHandler}
            />

        </div>
    );
};

