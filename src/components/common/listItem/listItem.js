import React from 'react';
import './listItem.less'
export default class ListItem extends React.Component{
    render() {
        const leftContent = (
            <div className="list-item-left">
                <img src={this.props.url} alt=""/>
            </div>
        );
        function rightItem(content,index) {
          return (
              <p className={`right-item 
                             right-item-${index}`}>
                  {content}
              </p>
          )
        }
        const rightContent = (
            <div className="list-item-right">
                {rightItem(this.props.title,0)}
                {rightItem(this.props.content,1)}
                {this.props.rightExpand}
            </div>
        );
        return (
            <div onClick={this.props.onClick}
                 className={`list-item list-item-${this.props.type}`}>
                {leftContent}
                {rightContent}
            </div>
        )
    }
}
