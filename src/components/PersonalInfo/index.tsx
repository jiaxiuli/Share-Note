/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-16 11:47:35
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PersonalInfo/index.tsx
 */
import React from 'react';
import Card from '../Card';
import { Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CommonPropsWithUserInfo } from '../../common/Interfaces';
import './index.scss';

const { Title } = Typography;

const PersonalInfo = ({ userInfo }: CommonPropsWithUserInfo): React.ReactElement => {
    return (
        <div className='personal-info-main'>
            <Title level={5}>Personal Info</Title>
            <Card className='personal-info-card'>
                <div>
                    <Avatar icon={<UserOutlined />} />
                    <span className='personal-info-card-username'>
                        { userInfo?.username || 'you are not login' }
                    </span>
                </div>
            </Card>
        </div>
    )
};

export default PersonalInfo;