/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-16 08:54:04
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsItem/index.tsx
 */
import React from 'react';
import { Divider, Avatar } from 'antd';
import { PostsItemProps } from '../../common/Interfaces';
import Card from '../Card';
import './index.scss';

const PostsItem: React.FC<PostsItemProps> = (
    {
        Note=null,
        User=null,
        message='',
    }
):React.ReactElement => {

    return (
        <div className='posts-item-main'>
            <div className='post-item-author'>
                <Avatar style={{ marginRight: 8 }}/>
                { User?.username }
            </div>
            <div className='post-item-content'>
                <div>{message}</div>
                <Card style={{ marginTop: 12, padding: 8 }}>
                    <div className='posts-item-note-title'>
                        {Note?.title}
                    </div>
                    <div className='posts-item-note-content'>
                        {Note?.content}
                    </div>
                </Card>
            </div>
            <Divider />
        </div>
    );
}

export default PostsItem;