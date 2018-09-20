import React, { Component } from 'react';
import Header from '../../components/header';

 class HomePage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className="message">
                <Header title="消息" history={this.props.history} />
                消息
             </div>
          );
     }
 }
  
 export default HomePage;