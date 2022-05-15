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
import { loadUser } from '../../redux/slices/AuthSlice';
import { getUserInfo } from '../../redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './index.scss';

const PageLayout = () => {
    const { Header, Sider, Content } = Layout;

    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.auth.user);
    const userInfo = useSelector((state: any) => state.user.userInfo);
    console.info('current user: ', user, userInfo)

    useEffect(() => {
        dispatch(loadUser() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (user) {
            dispatch(getUserInfo({id: user.username}) as any).then((res: any) => console.log(res));
            // dispatch(listUserInfo() as any);
        }
    }, [dispatch, user]);
    
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