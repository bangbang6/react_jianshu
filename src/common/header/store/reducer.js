//小笔记本
import {actionTypes} from "./index.js"
import {fromJS} from "immutable"
const defaultStore = fromJS({
    focus : false,
    list:[],
    page:0,
    totalPage:1,
    mouseIn:false

})

export default (state = defaultStore,action)=>{

    if(action.type === actionTypes.SEARCHFOCUS){
        return state.set('focus',true)
    }
    if(action.type === actionTypes.SEARCHBLUE){
        return state.set('focus',false)
    }
    if(action.type === actionTypes.ADDLIST){
        return state.set('list',action.value).set('totalPage',action.totalPage)
    }
    if(action.type === actionTypes.MOUSEENTER){
        return state.set('mouseIn',true)
    }
    if(action.type === actionTypes.MOUSELEAVE){
        return state.set('mouseIn',false)
    }
    if(action.type === actionTypes.CHANGEPAGE){
        var newState = JSON.parse(JSON.stringify(state))
        var page = (newState.page + 1) % newState.totalPage
        console.log(page)
        return state.set('page',page)
    }
    return state
} 