import React ,{Component} from 'react'
import { CSSTransition } from 'react-transition-group';
import  {actionCreators} from "./store/index.js"

import {logoutAsync} from '../../pages/login/store/actionCreators.js'
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavInput,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchWrapper,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style.js'
import {Link} from 'react-router-dom'
class Header extends Component{
    
    render(){
        let {focus,handleFocus,handleBlur,list} = this.props
        return (
            <HeaderWrapper>
                <Link to={"/"} >
               < Logo />
               </Link>
               <Nav >
                   <NavItem className = "left">首页</NavItem>
                   <NavItem className = "left" >App</NavItem>
                   <NavItem className = "right">
                    <i className="iconfont">&#xe636;</i>
                   </NavItem>
                   
                   {this.props.login ?<NavItem className = "right" onClick={this.props.logout} >退出</NavItem>:<Link to="/login"><NavItem className = "right">登录</NavItem> </Link>}
                  
                   <SearchWrapper>
                       <CSSTransition in={focus} timeout = {200} classNames="slide">
                   <NavInput className={focus?"focus":""} onFocus={handleFocus.bind(this,list)} onBlur = {handleBlur.bind(this)}></NavInput>
                   </CSSTransition>
                   <i  className={focus?"focus iconfont zoom":"iconfont zoom"}>&#xe62b;</i>
                    {this.getList(focus)}
                   </SearchWrapper>
               </Nav>
               <Addition>
                   <Link to="/write">
                   <Button className="write">

                   <i className="iconfont">&#xe61b;</i>
                   写文章</Button>
                   <Button className="reg">注册</Button>
                   </Link>
               </Addition>
            </HeaderWrapper>
        )
    }
    getList(show){
        let {list,page,handleMouseEnter,mouseIn,handleMouseLeave,handleChangePage} = this.props
        let jsList = list.toJS()
        
        let pageList = []
        if(jsList.length){
            for(var i = page*3;i<(page+1)*3;i++){
                pageList.push(jsList[i])
            }
            if(show || mouseIn){
    
                return (
                 
                    <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={handleChangePage.bind(this,this.icon)}>
                        <i ref= {(icon)=>{this.icon = icon}} className="iconfont spin">&#xe851;</i>
                        换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                            {pageList.map((item,index)=>{
                                return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
                            })}
                    </SearchInfoList>
                    
    
                    </SearchInfo>
                )
            }
        }
        
    }
    
    
}
const mapStateToProps = (state)=>{
    return {
        focus:state.getIn(['header','focus']),   
        list:state.getIn(["header","list"]),
        page:state.getIn(["header","page"]),
        mouseIn:state.getIn(["header","mouseIn"]),
        login:state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        
        handleFocus:function(list){
           list.size ===0 && dispatch(actionCreators.getList())
           const action =  actionCreators.searchFocus()
            dispatch(action)
        },
        handleBlur:function(){
            const action = actionCreators.searchBlur()
            dispatch(action)
        },
        handleMouseEnter:function(){
            const action = actionCreators.mouseEnter()
            dispatch(action)
        },
        handleMouseLeave:function(){
            const action = actionCreators.mouseLeave()
            dispatch(action)
        },
        handleChangePage:function(icon){
            var originAngle = icon.style.transform.replace(/[^0-9]/ig,"")
            console.log(originAngle)
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }
            
            icon.style.transform ='rotate('+ (originAngle+360) +'deg)'
            const action = actionCreators.changePage()
            dispatch(action)
        },
        logout:function(){
            dispatch(logoutAsync())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)