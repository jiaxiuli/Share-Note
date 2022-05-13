/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-13 17:01:57
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/Card/index.tsx
 */
import * as React from 'react';
import { CardProps } from "../../common/Interfaces";

const Card: React.FC<React.PropsWithChildren<CardProps>> = (
    { 
        style={},
        children=null,
        className='',
    }
): React.ReactElement => {

    return (
        <div
            style={{
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',
                ...style
            }}
            className={className}
        >
            {children}
        </div>
    )
};

export default Card;