/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-16 14:34:14
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsList/index.tsx
 */
import { Typography, message } from 'antd';
import React, { useEffect } from 'react';
import Card from '../Card';
import PostsItem from '../PostsItem';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../redux/slices/PostSlice';
import { Post } from '../../common/Interfaces';
import './index.scss';

const { Title } = Typography;

const PostsList = ():React.ReactElement => {
    const posts = useSelector((state: any) => state.post.posts);
    const dispatch = useDispatch();
    console.log(posts)

    useEffect(() => {
        dispatch(getPosts({}) as any).then((res: any) => {
            if (res.meta.requestStatus === "rejected") {
                message.error('errors met when fetching posts');
                console.error(res.error.message);
            }
        });
    }, [dispatch]);

    return (
        <div className='posts-list-main'>
            <Title level={5}>Popular posts</Title>
            <div>
                <Card className='posts-list-box'>
                    {
                        posts?.listPosts?.items?.map((item: Post) => {
                            return <PostsItem
                                        key={item.id}
                                        Post={item}
                                    />
                        }) || null
                    }
                </Card>
            </div>
        </div>
    )
}

export default PostsList;