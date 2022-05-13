/*
 * @Author: 李佳修
 * @Date: 2022-05-11 15:10:29
 * @LastEditTime: 2022-05-13 16:51:50
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/PageLayout/index.tsx
 */
import { Layout } from 'antd';
import Home from '../Home';
import SiderContent from '../../components/SiderContent';
import HeaderContent from '../../components/HeaderContent';
import Login from '../Login';
import { Routes, Route, Navigate } from "react-router-dom";
import './index.scss';

const PageLayout = () => {
    const { Header, Sider, Content } = Layout;
    
    return (
        <>
            <Layout className='page-layout-main'>
                <Sider
                    theme='light'
                    className='page-layout-sider'
                    breakpoint='lg'
                    collapsedWidth='60'
                >
                    <SiderContent />
                </Sider>
                <Layout className='page-layout-right'>
                    <Header className='page-layout-right-header'>
                        <HeaderContent/>
                    </Header>
                    <Content className='page-layout-right-content'>
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="home" element={<Home />} />
                            <Route path="login" element={<Login />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
};

export default PageLayout;