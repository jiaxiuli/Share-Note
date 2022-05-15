/*
 * @Author: 李佳修
 * @Date: 2022-05-15 19:22:24
 * @LastEditTime: 2022-05-15 19:34:30
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/NoteItem/index.tsx
 */
import React from 'react';
import { NoteItemProps } from '../../common/Interfaces';
import { Typography, Divider } from 'antd';
import './index.scss';

const { Title } = Typography;

const NoteItem: React.FC<NoteItemProps> = ({
    title='',
    content='',
    className='',
    style={}
}): React.ReactElement => {
    return (
        <div className='note-item-main'>
            <Title level={3}>{title}</Title>
            <div>{content}</div>
            <Divider />
        </div>
    );
};

export default NoteItem;