

export type CountingType = {
    number:number
    error: string
    startValue: number
    maxValue:number
}
type ActionType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC>
export const initState: CountingType = {
    number:0,
    error: '',
    startValue: 0,
    maxValue: 0
}

export const countingReduser = (state = initState, action: ActionType): CountingType => {
    switch (action.type) {
        case 'INCREMENT-VALUE':{
           /* if(state.min > action.count) {

            }*/

            return {...state, number: state.number + 1}
        }
        case 'RESET-VALUE':{


            return {...state, number: state.number = 0}
        }



        default: return  state
    }
}

export const incrementAC = () => {
    return {
        type: 'INCREMENT-VALUE'
    }as const
}
export const resetAC = () => {
    return {
        type: 'RESET-VALUE'
    }as const
}