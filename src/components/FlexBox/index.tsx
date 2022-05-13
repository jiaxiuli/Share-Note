/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:55:07
 * @LastEditTime: 2022-05-13 16:59:08
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/FlexBox/index.tsx
 */
import * as React from 'react';

const FlexBox: React.FC<React.PropsWithChildren<{}>> = (
    { 
        children=null,
    }
): React.ReactElement => {

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            {children}
        </div>
    )
};

export default FlexBox;