/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 14:02:56
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PersonalInfo/index.tsx
 */
import React from 'react';
import Card from '../Card';
import { Typography } from 'antd';
import { CommonPropsWithUserInfo } from '../../common/Interfaces';
import './index.scss';

const { Title } = Typography;

const PersonalInfo = ({ userInfo }: CommonPropsWithUserInfo): React.ReactElement => {
    return (
        <div className='personal-info-main'>
            <Title level={5}>Personal Info</Title>
            <Card className='personal-info-card'>{ userInfo?.email || 'you are not login' }</Card>
        </div>
    )
};

export default PersonalInfo;