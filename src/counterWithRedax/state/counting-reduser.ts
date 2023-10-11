export type CountingType = {
    number: number
    error: string
    startValue: number
    maxValue: number
}
type ActionType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC> | ReturnType<typeof maxValueAC> |
    ReturnType<typeof startValueAC> | ReturnType<typeof numberAC>
export const initState: CountingType = {
    number: 0,
    error: '',
    startValue: 0,
    maxValue: 0
}

export const countingReduser = (state = initState, action: ActionType): CountingType => {
    switch (action.type) {
        case 'INCREMENT-VALUE': {
            return {...state, number: state.number + 1}
        }
        case 'RESET-VALUE': {
            return {...state, number: state.number = 0}
        }
        case 'MAX-VALUE': {
            if (state.startValue < 0 || state.startValue >= action.maxValue) {
                return {...state, maxValue: action.maxValue, error: 'write correct'}
            } else {
                return {...state, maxValue: action.maxValue, error: ''}
            }
        }
        case 'START-VALUE': {
            if (action.startValue < 0 || action.startValue >= state.maxValue) {
                return {...state, startValue: action.startValue, error: 'write correct'}
            } else {
                return {...state, startValue: action.startValue, error: ''}
            }
        }
        case 'SET-VALUE': {
            return {...state, number: action.value}
        }


        default:
            return {...state}
    }
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
export const numberAC = (value: number) => {
    return {
        type: 'SET-VALUE',
        value
    } as const

}