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
                ...style
            }}
            className={className}
        >
            {children}
        </div>
    )
};

export default Card;