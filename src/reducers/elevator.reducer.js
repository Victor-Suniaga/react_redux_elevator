import { FLOOR_SOL } from '../constants/actions'

const INITIAL_STATE = {
    petitions: [],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FLOOR_SOL:
            return {
                ...state,
                petitions: [...state.petitions, action.payload]
            }
        default:
            return state
    }
}