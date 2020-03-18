import React from 'react';
export default class Tag extends React.Component{
    render() {
        let tagBox = "tag-box";
        this.props.isBolder&&(tagBox+=" tag-border-box");
        const color = this.props.color;
        return (
            <div className={tagBox}
                 style={`border-color:${this.props.color};
                        color:${color}`}>
                {this.props.tag}
            </div>
        )
    }
}
