import React from 'react';
import  './App.css';
import Name from './name';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import  Image from './productImage';
import Price from'./price';
import Version from './version';

import Description from './description'

function App() {
  const firstName="marwen"
  return (
    <div className="App">
       <Card className='ll' style={{ width: '35rem' }}>
          <Image/>
          <Card.Body>

            <Name className="name"/>
            <Price className="price"/>
            <Version className="version"/>
            <Description className='des'/>
           

          </Card.Body>
          <p id="p1">Hello, {firstName ? firstName : "there"}!</p>
       </Card>
    </div>
  );
};

export default App;
