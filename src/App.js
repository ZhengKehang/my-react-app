import React from 'react';
import './App.css';
import Tickets from './components/ticket/tickets/tickets'
function App() {
  const tickets = [
    {
      url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583924639040&di=5bd99385a850e57c75c0f1d047fb5bcf&imgtype=0&src=http%3A%2F%2Fimage.mhxk.com%2Ffile%2Fuserfiles%2Fimages%2F321275%2F3.jpg',
      title:'测试',
      content:'测试测试测试测试测试测试测试测试测试测试测试测试测试',
      count:{buy:10,message:20},
      type:'index',
      id:'1'
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Tickets tickets={tickets}></Tickets>
      </header>
    </div>
  );
}

export default App;
