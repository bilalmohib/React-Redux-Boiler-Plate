import {combineReducers} from "redux"
import auth_reducer from '../reducer/auth_reducer'
import app_reducer from '../reducer/app_reducer'
export default combineReducers({
    auth:auth_reducer,
    app:app_reducer
})