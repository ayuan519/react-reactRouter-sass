import React, { Component } from 'react';
import Swiper from '../../components/swiper'
import Header from '../../components/header';
import './index.scss'
 class HomePage extends Component {
     constructor(props) {
         super(props);
         this.state = { 
            bannerData:[{url:'../../static/images/banner/1.jpg'},{url:'../../static/images/banner/2.jpg'},{url:'../../static/images/banner/3.jpg'},
                        {url:'../../static/images/banner/4.jpg'},{url:'../../static/images/banner/5.jpg'},{url:'../../static/images/banner/6.jpg'}]
          }
     }
     jumpDetail = () => {
         const {history} = this.props;
         window.Method.jumpToPage({
            url:'/detailPage',
            history
         })
     }
     render() { 
         const {bannerData} = this.state;
         const bannerHTML = bannerData.map((res,index) => {
            return (
                <div className="swiper-slide" key={`banner${index}`}>
                    <img className="swiper-slide-img" src={require('../../static/images/banner/' + (index + 1) + '.jpg')} alt="url"/>
                </div>
            )
         })
         return ( 
             <div className="homePage">
                <Header title="首页" history={this.props.history} />
                <Swiper>
                    {bannerHTML}
                </Swiper>
             </div>
          );
     }
 }
  
export default HomePage;