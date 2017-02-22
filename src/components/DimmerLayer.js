import React from 'react';

const DimmerLayer = (props) => {
	return (
		<div className={props.sidebarIsExpanded ? "dimmer-layer" : "dimmer-layer hidden"} onClick={props.closeSidebar}></div>
	)
}

export default DimmerLayer;