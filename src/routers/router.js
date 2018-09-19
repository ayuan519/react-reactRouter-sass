/**
 * @class 路由配置页
 */
import React,{Component} from 'react';
import { Redirect,Switch } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';
import Pages from './pages';
import DetailPage from '../page/detailPage'
import './index.scss';


export default class Routers extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className='page-box'style={{height:document.documentElement.clientHeight + 'px'}}>
                    <Switch>
                        <Route exact path="/detailPage" component={DetailPage} />
                        <Route exact path="/:name" component={Pages} />
                    </Switch>
                    <Switch>
                        <Redirect exact from='/' to={`/homePage`} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}