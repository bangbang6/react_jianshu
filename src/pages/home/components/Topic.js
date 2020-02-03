import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem

} from '../style.js'
class Topic extends Component{
    render(){
        return (
            <div>
                <TopicWrapper>
                   
                    {
                        this.props.topicList.map((item,index)=>{
                           return ( <TopicItem key={item.get('id')}>
                            <img className="topic" src={item.get('imgUrl')} alt="" />
                           {item.get('title')}</TopicItem> 
                           )
                        })                    
                    }
                </TopicWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    topicList:state.getIn(['home','topicList'])
})
export default connect(mapStateToProps,null)(Topic)