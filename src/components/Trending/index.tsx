import * as React from 'react';
import { Typography } from 'antd';
import Card from '../Card';
import './index.scss';

const { Title } = Typography;

const Trending = ():React.ReactElement => {
    return (
        <div className='trending-main'>
             <Title level={5}>Trending today</Title>
             <div className='trending-cards-box'>
                    <Card className='card'>123</Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
                    <Card className='card'></Card>
             </div>
        </div>
    )
};

export default Trending;