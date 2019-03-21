import { FLOOR_SOL } from '../constants/actions'


const INITIAL_STATE = {
    petitions: [],
    elevator1: null,
    elevator2: null,
    elevator3: null,
    elevator4: null,
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FLOOR_SOL:
            return {
                ...state,
                petitions: [...state.petitions, action.payload]
            }
        case 'ELEVATOR_GET_1':
            const response = (!state.petitions.length) ? state : {
                ...state,
                elevator1 : state.petitions[0],
                petitions: state.petitions.slice(1)
                
            }
            return response

        case 'ELEVATOR_SET_1':
            return {
                ...state,
                elevator1: action.payload
            }
        default:
            return state
    }
}