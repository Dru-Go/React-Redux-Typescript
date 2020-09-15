import { AppActions, REQUEST_SUCCESS, REQUEST_FALIURE } from '../actions_types'

const errorReducer = (state = null, action: AppActions) => {
    switch (action.type) {
        case REQUEST_FALIURE:
            return action.error

        case REQUEST_SUCCESS:
            return null

        default:
            break;
    }
}

export default errorReducer