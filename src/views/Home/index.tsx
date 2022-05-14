// import { Typography } from 'antd';
import Trending from '../../components/Trending';
import PostsList from '../../components/PostsList';
import PersonalInfo from '../../components/PersonalInfo';
import { loadUser } from '../../redux/slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { useEffect } from 'react';

// const { Title } = Typography;

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector((state: any) => state.auth);
    console.info('current user: ', user)

    useEffect(() => {
        dispatch(loadUser() as any).then((res: any) => console.log(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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