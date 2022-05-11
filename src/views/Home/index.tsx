import { Typography } from 'antd';
import Trending from '../../components/Trending';
import PostsList from '../../components/PostsList';
import PersonalInfo from '../../components/PersonalInfo';
import './index.scss';

const { Title } = Typography;

const Home = () => {
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