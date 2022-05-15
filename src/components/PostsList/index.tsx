/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 19:37:36
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsList/index.tsx
 */
import { Typography } from 'antd';
import React from 'react';
import Card from '../Card';
import PostsItem from '../PostsItem';
import './index.scss';

const { Title } = Typography;

const PostsList = ():React.ReactElement => {
    const posts: any = [{
        id: '1',
        title: 'Github',
        content: 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own'
    },{
        id: '2',
        title: 'Github',
        content: 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own'
    },{
        id: '3',
        title: 'Github',
        content: 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own'
    },{
        id: '4',
        title: 'Github',
        content: 'GitHub, Inc. is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own'
    }];
    return (
        <div className='posts-list-main'>
            <Title level={5}>Popular posts</Title>
            <div>
                <Card className='posts-list-box'>
                    {
                        posts?.map((item: any) => {
                            return <PostsItem key={item.id} title={item.title} content={item.content}/>
                        }) || null
                    }
                </Card>
            </div>
        </div>
    )
}

export default PostsList;