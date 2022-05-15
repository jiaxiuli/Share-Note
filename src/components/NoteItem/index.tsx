/*
 * @Author: 李佳修
 * @Date: 2022-05-15 19:22:24
 * @LastEditTime: 2022-05-15 21:33:07
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/NoteItem/index.tsx
 */
import React from 'react';
import { NoteItemProps } from '../../common/Interfaces';
import { Typography, Divider, Button } from 'antd';
import './index.scss';

const { Title } = Typography;

const NoteItem: React.FC<NoteItemProps> = ({
    title='',
    content='',
    handleShareNote
}): React.ReactElement => {
    return (
        <div className='note-item-main'>
            <div className='note-item-top'>
                <Title level={3}>{title}</Title>
                <Button type="primary" onClick={handleShareNote}>Share</Button>
            </div>
            <div>{content}</div>
            <Divider />
        </div>
    );
};

export default NoteItem;