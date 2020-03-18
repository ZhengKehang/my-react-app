import React from 'react'
import './tabList.less'
import TabItem from '../tabItem/tabItem'
const TabList = ()=>{
    const list = [
        {name:'首页',icon:'icon-liuyan',path:'shop'},
        {name:'我的',icon:'icon-liuyan',path:'mine'}
    ];
    const tabItems =  list.map((item,index)=>{
        return (
            <TabItem icon={item.icon}
                     name={item.name}
                     path={item.path}
                     key={index}/>
        )
    })
    return (
        <div className="tab-list">
            {tabItems}
        </div>
    )
};
export default TabList
