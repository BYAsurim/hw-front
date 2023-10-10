import React from 'react';
import {Button} from "@mui/material";

type SuperButtonPropsType = {
    text:string
    callBack: () => void
    disabled?: boolean

}

export const SuperButton = (props: SuperButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <Button size={"small"} variant="outlined" onClick={onClickHandler} disabled={props.disabled}
            >{props.text}</Button>
        </div>
    );
};


