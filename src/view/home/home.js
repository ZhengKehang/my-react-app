import React from 'react'
import TabList from '../../components/common/tabList/tabList'
export default class Home extends React.Component{
    render() {
        return (
            <div className="home-box">
                <div className="home-content-box">
                    {this.props.children}
                </div>
                <TabList/>
            </div>

        )
    }
}
