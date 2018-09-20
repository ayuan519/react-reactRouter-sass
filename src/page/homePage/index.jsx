import React, { Component } from 'react';
import Header from '../../components/header';
 class HomePage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     jumpDetail = () => {
         const {history} = this.props;
         window.Method.jumpToPage({
            url:'/detailPage',
            history
         })
     }
     render() { 
         return ( 
             <div className="homePage">
                <Header title="首页" history={this.props.history} />
                首页
                <button onClick={this.jumpDetail}>详情</button>
             </div>
          );
     }
 }
  
 export default HomePage;