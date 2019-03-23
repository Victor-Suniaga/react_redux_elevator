import { FLOOR_SOL } from '../constants/actions'


const INITIAL_STATE = {
    petitions: [],
    elevators: [null]
}

export default function (state = INITIAL_STATE, action) {
    let stateReturn;
    switch (action.type) {
        case FLOOR_SOL:
            return {
                ...state,
                petitions: [...state.petitions, action.payload]
            }
        case 'ELEVATOR_GET':
            stateReturn = ((!state.petitions.length) ? state : {
                ...state,
                elevators : state.elevators.map( (elev, index) => ((index === action.payload) ? state.petitions[0] : elev)),
                petitions: state.petitions.slice(1)
                
            })
            return stateReturn

        case 'ELEVATOR_SET':
            stateReturn = {
                ...state,
                elevators: state.elevators.map( (elev, index) => ((index === action.payload.elev) ? action.payload.floor : elev)),
            }
            return stateReturn
        default:
            return state
    }
}