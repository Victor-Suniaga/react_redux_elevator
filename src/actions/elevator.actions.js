import { FLOOR_SOL } from '../constants/actions'
import { ELEVATOR_GET, ELEVATOR_SET } from '../constants/actions';


export const floorAsked = (floorAsked) => {
    return (dispatch ) => {
        dispatch({
            type: FLOOR_SOL,
            payload: floorAsked,
        })
    }
}

export const getFloor = (elevator) => {
    return (dispatch ) => {
        dispatch({
            type: ELEVATOR_GET,
            payload: elevator
        })
    }
}

export const setFloor = (elev, newFloor) => {
    return (dispatch ) => {
        dispatch({
            type: ELEVATOR_SET,
            payload: {
                floor: newFloor,
                elev: elev
            }
        })
    }
}