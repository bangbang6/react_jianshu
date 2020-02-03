import styled from 'styled-components'

import logoPic  from "../../statics/logo.png"
export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
   

`

//让图片完全显示  background-size:contain; 
export const Logo = styled.div`
    display:block;
    width:100px;
    position:absolute;
    top:0;
    left:0;
    height:56px;
    background:url(${logoPic});
    background-size:contain; 
`

export const Nav = styled.div`
    width:960px;
    height:56px;
    margin: 0 auto;
   padding-right:50px;
   box-sizing:border-box;

`

export const NavItem = styled.div`
    line-height:56px;
    padding :0 15px;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#ea6f5a;
    }

`
//有&表示本元素 没有表示内部的元素
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out
    }
    .slide-enter-active{
        width:240px;
    } /* 进入的第一时刻和结束时刻 */
    .slide-exit{
        transition:all .2s ease-out
    }
    .slide-exit-active{
        width:160px
    }/* 退出的第一时刻和结束时刻 */
    .zoom{
        position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
        text-align: center;
        &.focus{
            background:#777;
            color:#fff;
        }
    }

`

export const NavInput = styled.input.attrs({placeholder:"搜索"})`
    font-size:14px;
   
	color: #666;

    margin-top:9px;
    height:38px;
    width:160px;
    padding:0 20px;
    box-sizing:border-box;
    outline:none;
    border:none;
    border-radius: 19px;
	background: #eee;
    &::placeholder{
       color: #999999
    }
    &.focus{
        width:240px;
    }  


`

export const SearchInfo = styled.div`
    position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, .2);
	background: #fff;

`

export const SearchInfoTitle = styled.div`
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   font-size: 14px;
   color: #969696;
  
`
export const SearchInfoSwitch = styled.span`
    float: right;
	font-size: 13px;
	cursor: pointer;
    .spin{
         display:block; 
       float:left; 
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        
		transform-origin: center center;
    }
    
`
export const SearchInfoList = styled.div`
overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`

export const Addition = styled.div`
    position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`

export const Button = styled.div`
    float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
    &.reg {
		color: #ec6149;
	}
	&.write {
		color: #fff;
		background: #ec6149;
	}

`