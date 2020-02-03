import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' 
import {DetailWrapper,Header,Content} from './style.js'
import {getDetailAsync} from './store/actionCreators.js'
class Detail extends Component {
    render(){
        const {title,content} = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}>
                    
                </Content>
            </DetailWrapper>
        )
        
        
        }
        componentDidMount(){
                this.props.getDetail()
                console.log(this.props)
        }
    }
const mapStates = (state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatch = (dispatch)=>({
    getDetail:function(){
        dispatch(getDetailAsync())
    }
})
export default connect(mapStates,mapDispatch)(withRouter(Detail))