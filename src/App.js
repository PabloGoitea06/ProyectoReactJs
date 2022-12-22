import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './App.css';
import NavBar from './components/NavBar';
import { Card, Layout } from 'antd';



const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const arrayOfImages = [
  {
    title: 'Cartera',
    description: 'Cuelga',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    title: 'Peine',
    description: 'Peina',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
  {
    title: 'Pollera',
    description: 'AhViste',
    src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  },
]


const App = () => {

  return (
    <Layout className="layout">
      <NavBar fill="#FFF" />
      <Content style={{ padding: '0 50px' }}>
        {
          arrayOfImages.map(({ title, description, src }) => {
            return (
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={src} />}
              >
                <Meta title={title} description={description} />
              </Card>
            )
          })
        }
      </Content>
    </Layout>
  );
};




export default App;
