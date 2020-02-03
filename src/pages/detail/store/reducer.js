import {fromJS} from "immutable"
const defaultStore = fromJS({
   content:"",
   title:""


})

export default (state = defaultStore,action)=>{
    if(action.type === "getDetail"){
      return  state.merge({
            content:action.value.content,
            title:action.value.title
        })
        
    }
    return state
} 