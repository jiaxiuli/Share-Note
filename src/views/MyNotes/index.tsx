/*
 * @Author: 李佳修
 * @Date: 2022-05-15 17:49:38
 * @LastEditTime: 2022-05-15 22:19:56
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/MyNotes/index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Modal, Input, Typography, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from "../../components/NoteItem";
import Card from '../../components/Card';
import { getNotesByUserId } from '../../redux/slices/NoteSlice';
import { createPostFromUserId } from '../../redux/slices/PostSlice';
import { Note } from '../../common/Interfaces';
import { useNavigate } from 'react-router';
import './index.scss';

const { TextArea } = Input;
const { Title } = Typography;
const antdMessage = message;

const MyNotes = (): React.ReactElement => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [currentNote, setCurrentNote] = useState<Note | null>(null);
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const user = useSelector((state: any) => state.user.userInfo);
    const notes = useSelector((state: any) => state.note.notes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const filter = {
                noteAuthorId: {
                    eq: user.id
                }
            }
            dispatch(getNotesByUserId({ filter }) as any);
        }
    }, [user, dispatch]);

    const handleShareNote =  (noteInfo: Note) => {
        setCurrentNote(noteInfo);
        toggleModalVisible(true);
    }

    const handlePostTheShare = async () => {
        console.log(message, currentNote)
        setLoading(true);
        const createPostInput = {
            message,
            postNoteId: currentNote?.id,
            postUserId: user.id
        };
        const res = await dispatch(createPostFromUserId({ createPostInput }) as any);
        if (res.meta.requestStatus === "fulfilled") {
            navigate('/home');
            antdMessage.success('note shared successfully!');
        } else {
            antdMessage.error(res.error.message);
        }
        setLoading(false);
    }

    const toggleModalVisible = (open: boolean) => {
        setIsModalVisible(open);
        if (!open) {
            setMessage('');
        }
    }
    return (
        <div className='my-note-main'>
            <Card className='notes-container'>
                {
                    notes && notes?.listNotes?.items.map((item: any) => (
                        <NoteItem
                            key={item.id}
                            title={item.title}
                            content={item.content}
                            handleShareNote={() => handleShareNote(item)}
                        />
                    ))
                }
            </Card>
            <Modal
                title="Share my note"
                visible={isModalVisible}
                onOk={handlePostTheShare}
                okButtonProps={{
                    loading
                }}
                onCancel={() => toggleModalVisible(false)}>
                    <TextArea
                        showCount
                        style={{ height: 120 }}
                        placeholder="Leave a message..."
                        bordered={false}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Card style={{ marginTop: 24, padding: 8 }}>
                        <Title
                            level={5}
                            className='select-box-title'
                        >
                            {currentNote?.title}
                        </Title>
                        <div className='select-box-content'>
                            {currentNote?.content}
                        </div>
                    </Card>
            </Modal>
        </div>
    )
};

export default MyNotes;