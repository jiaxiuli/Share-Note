/*
 * @Author: 李佳修
 * @Date: 2022-05-11 14:02:07
 * @LastEditTime: 2022-05-11 14:03:37
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