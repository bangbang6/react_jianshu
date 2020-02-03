import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox,Input,Button} from './style.js'
import {Redirect} from 'react-router-dom'
import {loginAsync} from './store/actionCreators.js'
class Login extends Component {
    render(){
        const {alogin} = this.props
        if(!alogin){
      return ( 
      <LoginWrapper>
          <LoginBox>
           
          <Input ref={(input)=>{
             this.account = input
          }}/>
          <Input type='password' innerRef={(input)=>{
              this.password = input
          }}/>
             <Button onClick={()=>{this.props.login(this.account,this.password)}}>登录</Button>
          </LoginBox>
      </LoginWrapper>
    )
    }else{
        return <Redirect to="/" />
    }
}
}
const mapStates = (state)=>({
    alogin:state.getIn(['login','login'])
})
const mapDispatch = (dispatch)=>({
    login:function(account,password){
        dispatch(loginAsync(account,password))
    }
})
export default connect(mapStates,mapDispatch)(Login)