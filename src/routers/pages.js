/**
 * @class 路由配置页
 */
import React,{Component} from 'react';
import { Route, Switch} from 'react-router-dom';
// import Header from '../components/header';
import TabBar from '../components/tabBar';
import HomePage from '../page/homePage';
import MinePage from '../page/minePage';
import Message from '../page/message';
import Release from '../page/release';
import './index.scss';
export default class Pages extends Component{
    // 初次打开页面拦截
    componentWillMount(){
        
    }
    // 页面跳转拦截
    componentWillReceiveProps(){
       
    }
    render(){
        return(
            <div className='page'>
                <div className="content">
                    <Switch>
                        <Route exact path="/homePage" component={HomePage} />
                        <Route exact path="/minePage" component={MinePage} />
                        <Route exact path="/message" component={Message} />
                        <Route exact path="/release" component={Release} />
                    </Switch>
                </div>
                <div className="tabbar">
                    <Route exact path="/homePage" component={TabBar} />
                    <Route exact path="/minePage" component={TabBar} />
                    <Route exact path="/message" component={TabBar} />
                    <Route exact path="/release" component={TabBar} />
                </div>
            </div>
        )
    }
}