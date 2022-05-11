/*
 * @Author: 李佳修
 * @Date: 2022-05-11 15:10:29
 * @LastEditTime: 2022-05-11 16:43:04
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Home/index.tsx
 */
import { Layout } from 'antd';
import SiderContent from '../../components/SiderContent';
import './index.scss';

const Home = () => {
    const { Header, Sider, Content } = Layout;
    
    
    return (
        <>
            <Layout className='home-main'>
                <Sider
                    theme='light'
                    className='home-sider'
                    breakpoint='lg'
                    collapsedWidth='60'
                >
                    <SiderContent />
                </Sider>
                <Layout className='home-right'>
                    <Header className='home-right-header'>Header</Header>
                    <Content className='home-right-content'>
                        <div style={{ height: '2000px' }}>132123123</div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
};

export default Home;