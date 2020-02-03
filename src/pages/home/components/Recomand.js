import React, {Component} from 'react'
import {
    RecomandWrapper,
    RecomandItem
} from "../style.js"
import {connect} from 'react-redux'
class Recomand extends Component{
    render(){
        return (
            <div>
                {this.props.recommendList.map((item,index)=>{
                    return (
                        <RecomandWrapper key={item}>
                        <RecomandItem imgUrl={item.get('imgUrl')}></RecomandItem>
                    </RecomandWrapper>
                    )
                })}
                
            </div>
        )
    }
}
const mapStates = (state)=>({
    recommendList:state.getIn(["home","recommendList"])
})
export default connect(mapStates,null)(Recomand)