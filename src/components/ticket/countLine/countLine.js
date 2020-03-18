import IconTip from '../../common/iconTip/iconTip'
import React from 'react';
import './countLine.less'
function getType(type,iconType) {
    const countType = {
        'index':'buy,message'
    };
    return countType[type].includes(iconType)
}
function buyIcon(buy) {
    return (
        <IconTip icon="icon-liuyan"
                 tip={buy+"人购买"}>
        </IconTip>
    );
}
function messageIcon(message) {
    return (
        <IconTip icon="icon-liuyan"
                 tip={message+"人评论"}>
        </IconTip>
    );
}
function moneyTip(money) {
    return (
        <p className="ticket-money">
            {money}元起
        </p>
    );
}
function CountLine(props) {
    const {ticket,type} = props;
    const {count,money} = ticket;
    return (
        <div className="count-line">
            {getType(type,'buy')&&buyIcon(count.buy)}
            {getType(type,'message')&&messageIcon(count.message)}
            {getType(type,'money')&&moneyTip(money)}
        </div>
    )
}
export default CountLine;
