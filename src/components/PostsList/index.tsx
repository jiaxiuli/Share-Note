import { Typography } from 'antd';
import React from 'react';
import Card from '../Card';
import PostsItem from '../PostsItem';
import './index.scss';

const { Title } = Typography;

const PostsList = ():React.ReactElement => {
    return (
        <div className='posts-list-main'>
            <Title level={5}>Popular posts</Title>
            <div className='posts-list-box'>
                <Card>
                    <PostsItem title="Posts Title 1" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                    <PostsItem title="Posts Title 2" content="content"/>
                </Card>
            </div>
        </div>
    )
}

export default PostsList;