import React, { Component } from 'react';
import Header from '../../components/header';

 class HomePage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className="release">
                <Header title="发布" history={this.props.history} />
                发布
             </div>
          );
     }
 }
  
 export default HomePage;