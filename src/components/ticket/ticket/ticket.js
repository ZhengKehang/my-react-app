import React from 'react';
import ListItem from '../../common/listItem/listItem'
import IconTip from '../../common/iconTip/iconTip'
export default class Ticket extends React.Component{
    getRightExpand(ticket){
        let rightExpand= null;
        switch (ticket.type) {
            case 'index':
                rightExpand = this.getCount(ticket.count);
                break;
            case 'search':
                break
            default:
                break
        }
        return rightExpand;
    }
    getCount(count){
        const {buy,message} = count;
        return (
            <div className="count-item">
                <IconTip icon="icon-liuyan"
                         tip={buy+"人购买"}>
                </IconTip>
                <IconTip icon="icon-liuyan"
                         tip={message+"人评论"}>
                </IconTip>
            </div>
        )
    }
    toDetail(id){
        alert(id)
    }
    render() {
        const ticket = this.props.ticket;
        const rightExpand = this.getRightExpand(ticket);
        const {type,url,title,content,id}= ticket;
        return (
            <ListItem type={type}
                      onClick={()=>{this.toDetail(id)}}
                      rightExpand={rightExpand}
                      url={url}
                      title={title}
                      content={content}>
            </ListItem>
        )
    }
}
