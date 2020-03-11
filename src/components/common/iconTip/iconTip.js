import React from 'react';
export default class Tag extends React.Component{
    render() {
        let iconClass = this.props.iconClass?this.props.iconClass:"icon-class-normal";
        return (
            <div className={`icon-tip ${iconClass}`}>
                <i className={`iconfont ${this.props.icon}`}></i>
                <p className="tip">{this.props.tip}</p>
            </div>
        )
    }
}
