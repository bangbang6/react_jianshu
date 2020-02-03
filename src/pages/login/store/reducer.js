import {fromJS} from "immutable"
const defaultStore = fromJS({
   login:false



})

export default (state = defaultStore,action)=>{
   if(action.type === "login"){
       return state.set('login',true)
   }
   if(action.type === "logout"){
    return state.set('login',false)
   }
    return state
} 