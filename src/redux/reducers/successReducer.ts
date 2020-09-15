import { AppActions, REQUEST_SUCCESS, REQUEST_FALIURE } from '../actions_types'

const successReducer = (state = null, action: AppActions) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return action.message

        case REQUEST_FALIURE:
            return null

        default:
            break;
    }
}

export default successReducer