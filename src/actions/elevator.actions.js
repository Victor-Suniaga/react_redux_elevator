import { FLOOR_SOL } from '../constants/actions'


export const floorAsked = (people, floor) => {
    return (dispatch ) => {
        dispatch({
            type: FLOOR_SOL,
            payload: {
                floor,
                people
            },
        })
    }
}