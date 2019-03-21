import { FLOOR_SOL } from '../constants/actions'


export const floorAsked = (floorAsked) => {
    return (dispatch ) => {
        dispatch({
            type: FLOOR_SOL,
            payload: floorAsked,
        })
    }
}

export const getFloor = (elevatorType) => {
    return (dispatch ) => {
        dispatch({
            type: elevatorType
        })
    }
}

export const setFloor = (elevatorType, newFloor) => {
    return (dispatch ) => {
        dispatch({
            type: elevatorType,
            payload: newFloor
        })
    }
}