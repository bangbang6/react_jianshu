import axios from 'axios'

export const getDetailAsync = ()=>{
    return (dispatch)=>{
        axios.get('/api/detail.json').then((res)=>{
            dispatch({
                type:"getDetail",
                value:res.data.data
            })
        })
    }
}