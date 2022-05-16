/*
 * @Author: 李佳修
 * @Date: 2022-05-11 14:02:07
 * @LastEditTime: 2022-05-16 14:51:16
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/common/Interfaces.ts
 */
import * as React from 'react';

export interface CardProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface NoteItemProps {
    title: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
    handleShareNote?: () => void;
}

export interface UserInfo {
    email: string;
    id: string;
    user_pool_id: string;
    user_sub_id: string;
    username: string;
    [propName: string]: any;
}

export interface Note {
    content: string;
    id: string
    noteAuthorId: string;
    title: string;
    [propName: string]: any;
}

export interface Post {
    id: string;
    collected_users: Array<string> | null;
    liked_users: Array<string> | null;
    message: string;
    postUserId: string;
    Note: Note,
    User: UserInfo,
    [propName: string]: any;
}
export interface PostsItemProps {
    Post: Post;
    className?: string;
    style?: React.CSSProperties;
    [propName: string]: any;
}
export interface CommonPropsWithUserInfo {
    userInfo: UserInfo | null;
}
