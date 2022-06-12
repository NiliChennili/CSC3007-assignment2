import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import CaseBarChart from './CaseBarChart';



const { Header, Footer, Content } = Layout;


function Home() {
  return (
    
    <Layout>

    <Header className="header">
    <Title className = "header_title" style={{color: 'white', padding:24}} level={4}>Crime Bar Chart</Title>
    </Header>
    
    <Content style={{ margin: '24px 16px 0' }}>
    <div className="site-layout-background" style={{ padding: 24, minHeight: 530 }}>
    < CaseBarChart/>
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Crime Bar Chart ©2022 Created by Chen Nili</Footer>
    
    </Layout>
     
    

  );
}

export default Home;