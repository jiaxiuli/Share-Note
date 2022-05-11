import React from 'react';
import { Typography } from 'antd';
import { Divider } from 'antd';
import { PostsItemProps } from '../../common/Interfaces';
import './index.scss';

const { Title } = Typography;

const PostsItem: React.FC<PostsItemProps> = (
    {
        title='',
        content='',
        className='',
        style={}
    }
):React.ReactElement => {
    return (
        <div className='posts-item-main'>
            <Title level={3}>{title}</Title>
            <div>{content}</div>
            <Divider />
        </div>
    );
}

export default PostsItem;