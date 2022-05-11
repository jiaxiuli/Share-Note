import React from 'react';
import { Input } from 'antd';
import './index.scss';

const { Search } = Input;

const HeaderContent = (): React.ReactElement => {
    return (
        <div className='header-content-main'>
            <Search placeholder="input search text" size='large' allowClear style={{ width: 400 }} />
            <div className='header-content-operations'></div>
        </div>
    )
}

export default HeaderContent;