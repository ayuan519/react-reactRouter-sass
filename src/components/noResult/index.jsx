import React, { Component } from 'react'
import "./index.scss"
class NoResult extends Component {
	render() {
		const {noResult,noResultText} = this.props;
		return (
			noResult && noResultText
			? (
				<div className="no-result" ref="noResult" >
					<div className="noResult-img">
						<img src={require('../../static/images/noReasult/img_empty_' + noResult + '.png')} alt=""/>
					</div>
					<p className="noResult-text">{noResultText}</p>
				</div>
			)
			: null
		)
	}
}

export default NoResult
