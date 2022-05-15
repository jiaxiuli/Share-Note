/*
 * @Author: 李佳修
 * @Date: 2022-05-15 18:39:14
 * @LastEditTime: 2022-05-15 19:15:53
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/NoteCreate/index.tsx
 */
import React, { useState } from 'react';
import { Button, message, Input } from 'antd';
import Card from '../../components/Card';
import { createNoteFromUserId } from '../../redux/slices/NoteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './index.scss';

const { TextArea } = Input;

const NoteCreate = (): React.ReactElement => {
    const user = useSelector((state: any) => state.user.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        title: '',
        content: ''
    });

    const handleSaveNote = async () => {
        const createNoteInput = {
            ...state,
            noteAuthorId: user.id
        };
        setLoading(true);
        const res = await dispatch(createNoteFromUserId({ createNoteInput }) as any);
        if (res.meta.requestStatus === "fulfilled") {
            message.success("New note has saved!");
            navigate('/my-note');
        } else {
        message.error(res.error.message);
        }
        setLoading(false);
    }

    return (
        <div className='create-note-main'>
            <Card className='create-note-card'>
                <div className='create-note-form-container'>
                    <Input
                        addonBefore="Title"
                        placeholder="input title"
                        allowClear
                        onChange={(e) => {
                            setState((prev) => ({
                                ...prev,
                                title: e.target.value
                            }))
                        }} 
                    />
                    <TextArea
                        showCount 
                        style={{ 
                            height: 400,
                            marginTop: 24
                        }}
                        onChange={(e) => {
                            setState((prev) => ({
                                ...prev,
                                content: e.target.value
                            }))
                        }} 
                    />
                    <Button
                        type='primary'
                        style={{
                            marginTop: 24,
                            width: 200
                        }}
                        loading={loading}
                        onClick={handleSaveNote}
                    >
                        Note it
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default NoteCreate;