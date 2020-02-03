import React ,{Component} from 'react'
import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

class Login extends Component {
    render(){
        const {alogin} = this.props
        if(alogin){
            return(
                <div>write</div>
                
            )
        
   
    }else{
        return <Redirect to="/login" />
    }
}
}
const mapStates = (state)=>({
    alogin:state.getIn(['login','login'])
})
const mapDispatch = (dispatch)=>({
    
})
export default connect(mapStates,mapDispatch)(Login)