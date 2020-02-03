import { actionTypes} from './index.js'
import {fromJS} from "immutable"
import axios from 'axios'
export const searchFocus = ()=>({
    type:actionTypes.SEARCHFOCUS
})

export const searchBlur = ()=>({
    type:actionTypes.SEARCHBLUE
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            console.log(res.data)
            const action = {
                type:actionTypes.ADDLIST,
                value:fromJS(res.data),
                totalPage:Math.ceil(res.data.length / 3)
            }
            dispatch(action)
        })
    }
}

export const mouseEnter = ()=>({
    type:actionTypes.MOUSEENTER
})

export const mouseLeave = ()=>({
    type:actionTypes.MOUSELEAVE
})

export const changePage = ()=>({
    type:actionTypes.CHANGEPAGE
})