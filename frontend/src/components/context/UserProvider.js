// UserProvider.js
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const logout = () => {
        setUser(null);
    };

    const contextValue = {
        user,
        setUser,
        logout,
    };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
