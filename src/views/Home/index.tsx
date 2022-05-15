/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 12:34:03
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Home/index.tsx
 */
// import { Typography } from 'antd';
import Trending from '../../components/Trending';
import PostsList from '../../components/PostsList';
import PersonalInfo from '../../components/PersonalInfo';
import { loadUser } from '../../redux/slices/AuthSlice';
import { getUserInfo } from '../../redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { useEffect } from 'react';

// const { Title } = Typography;

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.auth.user);
    const userInfo = useSelector((state: any) => state.user);
    console.info('current user: ', user)

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
        <div className='home-main'>
            <div className='home-content'>
                <div className='home-content-posts'>
                    <Trending />
                    <PostsList />
                </div>
                <div className='home-content-sides'>
                    <PersonalInfo />
                    <PersonalInfo />
                </div>
            </div>
        </div>
    )
};

export default Home;