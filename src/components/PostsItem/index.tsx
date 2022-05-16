/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-16 19:14:49
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/PostsItem/index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Divider, Avatar, message } from 'antd';
import { UserOutlined, LikeOutlined, StarOutlined, CommentOutlined } from '@ant-design/icons';
import { PostsItemProps } from '../../common/Interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { updatePostsFromUserId } from '../../redux/slices/PostSlice';
import { getPosts } from '../../redux/slices/PostSlice';
import Card from '../Card';
import './index.scss';

const PostsItem: React.FC<PostsItemProps> = ({Post={}}):React.ReactElement => {
    const user = useSelector((state: any) => state.user.userInfo);
    const dispatch = useDispatch();

    const [isPostLiked, setIsPostLiked] = useState<boolean>(false);

    useEffect(() => {
        if (user && Post.liked_users) {
            const isLiked = Post.liked_users?.findIndex((item) => item === user.id) || 0;
            setIsPostLiked(isLiked !== -1);
        }
    }, [user, Post.liked_users]);

    const handleLikeOrUnlikePost = () => {
        if (isPostLiked) {
            // 如果已经点过赞了 取消点赞
            handleUnLikePost();
        } else {
            // 如果没有点过赞 就点赞
            handleLikePost();
        }
    }

    const handleUnLikePost = async () => {
        const updatePostInput = {
            id: Post.id,
            liked_users: []
        };
        const res = await dispatch(updatePostsFromUserId({updatePostInput}) as any);
        await dispatch(getPosts({}) as any);
        if (res.meta.requestStatus === 'fulfilled') {
            message.success('unliked!');
        }
        if (res.meta.requestStatus === 'rejected') {
            message.error('unlike failed');
        }
    }

    const handleLikePost = async () => {
        const updatePostInput = {
            id: Post.id,
            liked_users: [user.id]
        };
        const res = await dispatch(updatePostsFromUserId({updatePostInput}) as any);
        await dispatch(getPosts({}) as any);
        if (res.meta.requestStatus === 'fulfilled') {
            message.success('liked!');
        }
        if (res.meta.requestStatus === 'rejected') {
            message.error('like failed');
        }
    }
    return (
        <div className='posts-item-main'>
            <div className='post-item-author'>
                <Avatar style={{ marginRight: 8 }} icon={<UserOutlined />}/>
                { Post.User?.username }
            </div>
            <div className='post-item-content'>
                <div>{Post.message}</div>
                <Card style={{ marginTop: 12, padding: 8 }}>
                    <div className='posts-item-note-title'>
                        {Post.Note?.title}
                    </div>
                    <div className='posts-item-note-content'>
                        {Post.Note?.content}
                    </div>
                </Card>
                <div className='post-item-info'>
                    <div className='post-item-info-icon'>
                        <LikeOutlined
                            style={{
                                fontSize: 18,
                                marginRight: 8,
                                color: isPostLiked ? '#096dd9' : ''
                            }}
                            onClick={handleLikeOrUnlikePost}
                        />
                        <span>{ Post.liked_users?.length || 0 }</span>
                    </div>
                    <div className='post-item-info-icon'>
                        <StarOutlined style={{ fontSize: 18, marginRight: 8 }}/>
                        <span>{ Post.collected_users?.length || 0 }</span>
                    </div>
                    <div className='post-item-info-icon'>
                        <CommentOutlined style={{ fontSize: 18, marginRight: 8 }}/>
                        <span>110</span>
                    </div>
                </div>
            </div>
            <Divider />
        </div>
    );
}

export default PostsItem;