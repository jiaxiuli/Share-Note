import React from 'react';
import Card from '../Card';
import { Typography } from 'antd';
import './index.scss';

const { Title } = Typography;

const PersonalInfo = (): React.ReactElement => {
    return (
        <div className='personal-info-main'>
            <Title level={5}>Personal Info</Title>
            <Card className='personal-info-card'>123</Card>
        </div>
    )
};

export default PersonalInfo;