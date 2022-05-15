/*
 * @Author: 李佳修
 * @Date: 2022-05-15 17:49:38
 * @LastEditTime: 2022-05-15 19:26:29
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/MyNotes/index.tsx
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteItem from "../../components/NoteItem";
import Card from '../../components/Card';
import { getNotesByUserId } from '../../redux/slices/NoteSlice';
import './index.scss';

const MyNotes = (): React.ReactElement => {
    const user = useSelector((state: any) => state.user.userInfo);
    const notes = useSelector((state: any) => state.note.notes);
    const dispatch = useDispatch();
    console.log('notes+++++++++++', notes);
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

    return (
        <div className='my-note-main'>
            <Card className='notes-container'>
                {
                    notes && notes?.listNotes?.items.map((item: any) => (
                        <NoteItem key={item.id} title={item.title} content={item.content}/>
                    ))
                }
            </Card>
        </div>
    )
};

export default MyNotes;