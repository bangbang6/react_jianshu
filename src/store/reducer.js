import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer } from "../common/header/store"
import  {reducer as homeReducer} from "../pages/home/store/index.js"
import {reducer as detailReducer} from '../pages/detail/store/index'
import {reducer as loginReducer} from '../pages/login/store/index'
//结合小手册
const reducer = combineReducers({
	header: headerReducer,
    home : homeReducer,
    detail:detailReducer,
    login:loginReducer
});
export default reducer