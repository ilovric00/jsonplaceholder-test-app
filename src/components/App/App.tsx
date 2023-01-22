import React, { useEffect, useState } from 'react';
import AppRouter from 'routers/AppRouter';
import JSONPlaceholderService from 'services/JSONPlaceholderService';
import User from 'types/user';

import { UsersContextProvider } from 'utils/context/UsersContext';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await JSONPlaceholderService.getUsers();

      setUsers(response);
    };

    fetchUsers();
  }, []);

  return (
    <UsersContextProvider value={{ users }}>
      <AppRouter />
    </UsersContextProvider>
  );
};

export default App;
