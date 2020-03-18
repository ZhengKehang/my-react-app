import React from 'react';
import ListItem from '../../common/listItem/listItem'
import CountLine from '../countLine/countLine'
export default class Ticket extends React.Component{
    toDetail(id){
        alert(id)
    }
    getRightExpand(ticket,type){
        let rightExpand= null;
        switch (type) {
            case 'index':
                rightExpand = (
                    <CountLine ticket={ticket}
                               type={type}/>
                );
                break;
            case 'search':
                rightExpand = (
                    <React.Fragment>
                        <CountLine ticket={ticket}
                                   type={type}/>
                        <CountLine ticket={ticket}
                                   type={type}/>
                    </React.Fragment>
                );
                break;
            default:
                break
        }
        return rightExpand;
    }
    render() {
        const {ticket,type} = this.props;
        const rightExpand = this.getRightExpand(ticket,type);
        const {url,title,content,id}= ticket;
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
