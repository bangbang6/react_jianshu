import axios from 'axios'

export const loginAsync = (account,password)=>{
    return (dispatch)=>{
        axios.get("/api/login.json").then((res)=>{
            dispatch({
                type:'login',
                value:res.data.data
            })
        })
    }
}

export const logoutAsync = ()=>({
    type:"logout",
    
})