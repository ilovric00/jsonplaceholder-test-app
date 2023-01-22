import React from 'react';
import User from 'types/user';

interface UsersContextValues {
  users: User[] | null;
}

const UsersContext = React.createContext<UsersContextValues>({
  users: [],
});

export const useUsers = () => React.useContext(UsersContext);
export const UsersContextProvider = UsersContext.Provider;
export const UsersContextConsumer = UsersContext.Consumer;
