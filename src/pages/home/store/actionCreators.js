import axios from 'axios'
import {fromJS} from 'immutable'
let addHomeData = (result)=>({
    type:"addList",
    value:fromJS(result)
})
export const getMoreList = ()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            let result = res.data.data
            dispatch(addHomeData(result))
        })
    }
}