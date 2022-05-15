/*
 * @Author: 李佳修
 * @Date: 2022-05-11 14:02:07
 * @LastEditTime: 2022-05-15 19:25:06
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/common/Interfaces.ts
 */
import * as React from 'react';

export interface CardProps {
    className?: string;
    style?: React.CSSProperties;
}

export interface PostsItemProps {
    title: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface NoteItemProps {
    title: string;
    content: string;
    className?: string;
    style?: React.CSSProperties;
}

export interface UserInfo {
    email: string;
    id: string;
    user_pool_id: string;
    user_sub_id: string;
    username: string;
    [propName: string]: any;
}
export interface CommonPropsWithUserInfo {
    userInfo: UserInfo | null;
}
