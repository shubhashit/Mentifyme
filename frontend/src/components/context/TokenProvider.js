// UserProvider.js
import React, { useState } from 'react';
import TokenContext from './UserToken';

const TokenProvider = ({ children }) => {
    const [token, setToken] = useState('string');



    const contextValue = {
        token,
        setToken,
    };
    return <TokenContext.Provider value = {contextValue}>{children}</TokenContext.Provider>
};

export default TokenProvider;
