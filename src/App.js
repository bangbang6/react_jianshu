import React,{Component} from 'react';
import {Provider} from 'react-redux'
import Header from './common/header/index.js'
import store from './store/index.js'
import {Globalstyle } from "./style.js"
import {IconGlobal} from "./statics/iconfont/iconfont.js"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render(){
    return (
        <Provider store={store}>
            <Globalstyle />
            <IconGlobal />
            
            <BrowserRouter> {/* 路由 */}
            <div> {/* 路由股自责 */}
            <Header />
                <Route path="/" exact component = {Home}></Route>
                <Route path="/detail/:id" exact component = {Detail}></Route>
                <Route path="/login" exact component = {Login}></Route>
                <Route path="/write" exact component = {Write}></Route>
            </div>
            </BrowserRouter>

        </Provider>
      );
  }
    
}

export default App;