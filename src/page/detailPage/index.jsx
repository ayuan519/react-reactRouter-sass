import React, { Component } from 'react';
import Header from '../../components/header';

 class DetailPage extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className="detailPage">
                <Header title="详情" history={this.props.history}/>
                详情
             </div>
          );
     }
 }
  
 export default DetailPage;