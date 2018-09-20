import React, { Component } from 'react';
import './index.scss'
import comeBack from '../../static/images/public/navbar_icon_back_black.png';
import search from '../../static/images/public/navbar_icon_search.png'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleBack = () => {
        const {history} = this.props;
        history.goBack();
    }
    render() { 
        return ( 
            <div className="header">
                <img 
                    className="header-back" 
                    src={comeBack} alt="back"
                    onClick={this.handleBack}
                />
                <div className="header-title">
                    {this.props.title}
                </div>
                <div className="header-other">
                    <img src={search} alt="search"/>
                </div>
            </div>
         );
    }
}
 
export default Header;