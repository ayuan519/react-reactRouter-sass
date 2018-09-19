import React, { Component } from 'react';
import './index.scss'
import { TabBar } from 'antd-mobile';
import tabBardata from './data.js'

const Item = TabBar.Item
class tabBar extends Component {
    /**
     * 点击tabBar跳转
    */
    jumpNextPage = (url) => {
        const {history} = this.props
        window.Method.jumpToPage({
            url,
            history
        })
    }
    render() {
        console.log(window)
        const tabItem = tabBardata.map((res) => {
            return (
                <Item 
                    title={res.title}
                    key={res.title}
                    data-url={res.url}
                    selected = {res.url === window.location.pathname ? true : false}
                    onPress = {() => {
                        this.jumpNextPage(res.url)
                    }}
                    icon={
                        <div className="img-box">
                            <img src={require('../../static/images/public/'+res.icon+'.png')} alt={res.title} />
                        </div>
                    }
                    selectedIcon={
                        <div className="img-box">
                            <img src={require('../../static/images/public/'+res.selectIcon+'.png')} alt={res.title} />
                        </div>
                    }
                />
            )
        })
        return ( 
            <div className="footerBar">
                <TabBar className="flex" tintColor='#5D5E66' unselectedTintColor='#B1B1B6'>
                    {tabItem}
                </TabBar>
            </div>
        );
    }
}
 
export default tabBar;