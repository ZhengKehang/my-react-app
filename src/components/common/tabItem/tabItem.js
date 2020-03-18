import React from 'react'
import {NavLink} from 'react-router-dom'
import IconTip from '../iconTip/iconTip'
const TabItem = ({name,icon,path})=>{
    return (
        <NavLink className="tab-item" activeClassName="active-tab-item" to={"/"+path}>
            <IconTip icon={icon}
                     iconClass="tab-item-content"
                     tip={name}/>
        </NavLink>
    )
};
export default TabItem
