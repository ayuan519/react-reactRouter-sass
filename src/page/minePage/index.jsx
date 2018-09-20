import React, { Component } from 'react';
import Header from '../../components/header';

 class HomePage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className="minePage">
                <Header title="我的" history={this.props.history} />
                我的
             </div>
          );
     }
 }
  
 export default HomePage;