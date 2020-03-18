import React from 'react'
import TitleContent from '../../components/common/titleContent/titleContent'
import Tickets from '../../components/ticket/tickets/tickets'
export default class Mine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tickets:[]
        }
    }
    componentDidMount() {
        const tickets = [
            {
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583924639040&di=5bd99385a850e57c75c0f1d047fb5bcf&imgtype=0&src=http%3A%2F%2Fimage.mhxk.com%2Ffile%2Fuserfiles%2Fimages%2F321275%2F3.jpg',
                title:'我的商品',
                content:'我的商品我的商品我的商品我的商品我的商品我的商品',
                count:{buy:10,message:20},
                id:'2'
            }
        ];
        this.setState({
            tickets:tickets
        })
    }
    render() {
        return (
            <TitleContent title="我的商品"
                          content={
                              <Tickets tickets={this.state.tickets}
                                       type="index">
                              </Tickets>
                          }>
            </TitleContent>
        )
    }
}
