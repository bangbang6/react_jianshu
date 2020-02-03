import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    ListItem,
    ListInfo,
    LoadMore

} from '../style.js'
import {Link} from 'react-router-dom'
import {getMoreList} from '../store/actionCreators.js'
class List extends Component{
    render(){
        return (
            <div>
                
                    {
                        this.props.articleList.map((item,index)=>{
                            return (
                            <Link  key={index} to={"/detail/"+item.get("id")} >
                            <ListItem key = {index}>
                                <img src={item.get('imgUrl')} alt="" className='pic'/>
                            <ListInfo>
                                <h3 className='title'>{item.get("title")}</h3>
                                <p className='desc'>{item.get("desc")}</p>
                            </ListInfo>
                            </ListItem>
                            </Link>
                            )
                        })
                    }
                    <LoadMore onClick={this.props.loadMore}>更多文字</LoadMore>
                
            </div>
        )
    }
}
const mapStates = (state)=>({
    articleList:state.getIn(['home','articleList'])
})
const mapDispatch = (dispatch)=>({
    loadMore:function(){
        dispatch(getMoreList())
    }
})
export default connect(mapStates,mapDispatch)(List)