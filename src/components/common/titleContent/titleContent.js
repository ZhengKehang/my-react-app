import React from 'react'
import IconTip from '../iconTip/iconTip'
import './titleContent.less'
function TitleContent(props) {
    return (
        <div className="title-content">
            <div className="title">
                <IconTip icon={props.icon}
                         tip={props.title}
                         iconClass="title-left">
                </IconTip>
                {props.titleRight}
            </div>
            {props.content}
        </div>
    )
}
export default TitleContent;
