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
            return ((!state.petitions.length) ? state : {
                ...state,
                elevator1 : state.petitions[0],
                petitions: state.petitions.slice(1)
                
            })

        case 'ELEVATOR_SET_1':
            return {
                ...state,
                elevator1: action.payload
            }
        case 'ELEVATOR_GET_2':
            return ((!state.petitions.length) ? state : {
                ...state,
                elevator2 : state.petitions[0],
                petitions: state.petitions.slice(1)
                
            })

        case 'ELEVATOR_SET_2':
            return {
                ...state,
                elevator2: action.payload
            }
        case 'ELEVATOR_GET_3':
            return ((!state.petitions.length) ? state : {
                ...state,
                elevator3 : state.petitions[0],
                petitions: state.petitions.slice(1)
                
            })

        case 'ELEVATOR_SET_3':
            return {
                ...state,
                elevator3: action.payload
            }
        case 'ELEVATOR_GET_4':
            return ((!state.petitions.length) ? state : {
                ...state,
                elevator4 : state.petitions[0],
                petitions: state.petitions.slice(1)
                
            })

        case 'ELEVATOR_SET_4':
            return {
                ...state,
                elevator4: action.payload
            }
        default:
            return state
    }
}