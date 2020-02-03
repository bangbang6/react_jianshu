import React ,{Component} from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,BackTop
} from './style.js'
import {connect} from 'react-redux'
import axios from 'axios'
import Topic from './components/Topic'
import Recommand from './components/Recomand'
import List from './components/List'
import Writter from './components/Writter'
class Home extends Component {
    render(){
        return (
            <div>
                <HomeWrapper>


                <HomeLeft><img  alt=""  src="//upload-images.jianshu.io/upload_images/16235793-450b5ec107954781.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" className = "banner-img"/>
                <Topic />
                <List />
                
                </HomeLeft>
                <HomeRight>
                <Recommand />
                        <Writter />
                </HomeRight>
                
        {this.props.showScroll ?<BackTop onClick={this.handleScrollToTop}> ^ </BackTop>:null }
                </HomeWrapper>
            
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            let result = res.data.data
            //console.log(res)
            const action = {
                type:'changeHomeData',
                topicList:result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            }
            this.props.changeHomeData(action)
            this.bindEvent()
        })
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollShow)
    }
    handleScrollToTop(){
        window.scrollTo(0,0)
    }
}
const mapDispatch = (dispatch)=>({
    changeHomeData:function(action){
        dispatch(action)
    },
    changeScrollShow(e){
        if(document.documentElement.scrollTop > 400){
            dispatch({
                type:"scroll_show"
            })
        }else{
            dispatch({
            type:"scroll_hide"})
        }
    }
})
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
export default connect(mapState,mapDispatch)(Home)