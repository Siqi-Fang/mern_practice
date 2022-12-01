import { DISPLAY_ALERT, CLEAR_ALERT} from "./actions";

//Display alert when user submit with missing fields
const reducer = (state, action) => {
    switch (action.type){
        case DISPLAY_ALERT:
            return {...state,
                showAlert: true,
                alertType:'danger',
                alertText:'Please provide all values'}
        case CLEAR_ALERT:
            return {...state,
                showAlert: false,
                alertType:'',
                alertText:''}
        default:
            return {state}
    }

}

export default reducer