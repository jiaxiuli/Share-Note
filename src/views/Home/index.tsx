/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 22:32:18
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Home/index.tsx
 */
// import { Typography } from 'antd';
import Trending from '../../components/Trending';
import PostsList from '../../components/PostsList';
import PersonalInfo from '../../components/PersonalInfo';
import { useSelector } from 'react-redux';
import './index.scss';

// const { Title } = Typography;

const Home = () => {
    const userInfo = useSelector((state: any) => state.user.userInfo);

    return (
        <div className='home-main'>
            <div className='home-content'>
                <div className='home-content-posts'>
                    <Trending />
                    <PostsList />
                </div>
                <div className='home-content-sides'>
                    <PersonalInfo userInfo={userInfo}/>
                </div>
            </div>
        </div>
    )
};

export default Home;