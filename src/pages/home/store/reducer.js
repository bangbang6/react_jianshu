
import {fromJS} from "immutable"
const defaultStore = fromJS({
    topicList:[
        
    ],
    articleList:[
       
    ],
    recommendList:[
       

    ],
    showScroll:false,



})

export default (state = defaultStore,action)=>{
    if(action.type === "changeHomeData"){
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList)
        })
       
    }
    if(action.type === "addList"){
        return state.set('articleList',state.get('articleList').concat(action.value))
       
    }
    if(action.type === "scroll_show"){
        return state.set('showScroll',true)
    }
    if(action.type === "scroll_hide"){
        return state.set('showScroll',false)
    }
    return state
} 