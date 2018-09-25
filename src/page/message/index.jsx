import React, { Component } from 'react';
import Header from '../../components/header';
import NoResult from '../../components/noResult'

 class HomePage extends Component {
     render() { 
         return ( 
             <div className="message">
                <Header title="消息" history={this.props.history} />
                <NoResult 
                    noResult="goods"
                    noResultText="暂无消息"
                />
             </div>
          );
     }
 }
  
 export default HomePage;