/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 22:40:59
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsItem/index.tsx
 */
import React from 'react';
import { Typography } from 'antd';
import { Divider } from 'antd';
import { PostsItemProps } from '../../common/Interfaces';
import Card from '../Card';
import './index.scss';

const { Title } = Typography;

const PostsItem: React.FC<PostsItemProps> = (
    {
        Note=null,
        User=null,
        message='',
    }
):React.ReactElement => {

    return (
        <div className='posts-item-main'>
            <div>{message}</div>
            <Card style={{ marginTop: 12, padding: 8 }}>
                <Title
                    level={5}
                    className='posts-item-box-title'
                >
                    {Note?.title}
                </Title>
                <div className='posts-item-box-content'>
                    {Note?.content}
                </div>
            </Card>
            <Divider />
        </div>
    );
}

export default PostsItem;