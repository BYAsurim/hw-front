export type CountingType = {
    number: number
    error: string
    startValue: number
    maxValue:  number
}
type ActionType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC> | ReturnType<typeof maxValueAC> |
    ReturnType<typeof startValueAC> | ReturnType<typeof numberAC> | ReturnType<typeof setSettingAC>

export const initState: CountingType = {
    number: 0,
    error: '',
    startValue:0,
    maxValue: 0,
}

export const countingReduser = (state = initState, action: ActionType): CountingType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, number: state.number + 1}
        }
        case 'RESET-VALUE': {
            return {...state, number: state.number = 0}
        }
        // case 'MAX-VALUE': {
        //     if (state.startValue < 0 || state.startValue >= action.maxValue) {
        //         return {...state, maxValue: action.maxValue, error: 'write correct'}
        //     } else {
        //         return {...state, maxValue: action.maxValue, error: ''}
        //     }
        // }
        // case 'START-VALUE': {
        //     if (action.startValue < 0 || action.startValue >= state.maxValue) {
        //         return {...state, startValue: action.startValue, error: 'write correct'}
        //     } else {
        //         return {...state, startValue: action.startValue, error: ''}
        //     }
        // }
        case 'SetSetting' :{
            const {key,value} = action;
            const checkedStart = key == 'startValue' ? value : state.startValue;
            const checkedMax   = key == 'maxValue' ? value : state.maxValue;
            let error = '';
            if(state.startValue < 0 || value < 0 || checkedStart >= checkedMax) {
                error = 'write correct'
            }
            return {...state, [key]: value, error}
        }
        case 'SET-VALUE': {
            return {...state, number: state.startValue}
        }
        default:
            return state
    }
}

export const setSettingAC = (key: 'startValue' | 'maxValue',value: number) => {
    return {
        type: 'SetSetting',
        key,
        value
    } as const
}


export const incrementAC = () => {
    return {
        type: 'INCREMENT-VALUE'
    } as const
}
export const resetAC = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}
export const maxValueAC = (maxValue: number) => {
    return {
        type: 'MAX-VALUE',
        maxValue
    } as const
}
export const startValueAC = (startValue: number) => {
    return {
        type: 'START-VALUE',
        startValue
    } as const
}
export const numberAC = () => {
    return {
        type: 'SET-VALUE',
    } as const

}