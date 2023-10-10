import {CountingType, initState} from "./counting-reduser";


type SettingActionType = ReturnType<typeof maxValueAC> |
                         ReturnType<typeof startValueAC>


export const settingReduser = (state = initState, action: SettingActionType): CountingType => {
    switch (action.type) {
        case 'MAX-VALUE': {
            debugger
            if (state.startValue < 0 || state.startValue >= action.maxValue) {
                return {...state, error: 'write correct'}
            } else {
                return {...state, maxValue: action.maxValue, error: ''}
            }

        }
        case 'START-VALUE':{
            if(action.startValue < 0 || action.startValue >= state.maxValue){
                return {...state, error:'write correct'}
            }else {
                return {...state, startValue:action.startValue, error:''}
            }

        }


        default:
            return state

    }
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