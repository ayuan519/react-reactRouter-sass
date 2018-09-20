import React, { Component } from 'react';
class swiperBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        new window.Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            direction : 'horizontal'
        })
    }
    render() { 
        return ( 
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.children} 
                </div>
            </div>
         );
    }
}
 
export default swiperBanner;