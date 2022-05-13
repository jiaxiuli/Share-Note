/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-13 09:07:42
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsList/index.tsx
 */
import { Typography } from 'antd';
import React from 'react';
import Card from '../Card';
import PostsItem from '../PostsItem';
import { getPostsAsync } from '../../redux/slices/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './index.scss';

const { Title } = Typography;

const PostsList = ():React.ReactElement => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts.list);

    useEffect(() => {
        dispatch(getPostsAsync() as any);
    }, [dispatch]);

    console.log(posts);
    return (
        <div className='posts-list-main'>
            <Title level={5}>Popular posts</Title>
            <div className='posts-list-box'>
                <Card>
                    {
                        posts?.listNotes?.items.map((item: any) => {
                            return <PostsItem key={item.id} title={item.title} content={item.content}/>
                        }) || null
                    }
                </Card>
            </div>
        </div>
    )
}

export default PostsList;