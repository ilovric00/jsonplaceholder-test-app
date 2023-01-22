import { useMemo } from 'react';

import User from 'types/user';

type UseUserFullNamePayload = Pick<User, 'name'>;

const useUserFullName = (users: User[] | null, userId: number): UseUserFullNamePayload =>
  useMemo<UseUserFullNamePayload>(() => {
    const foundUser = users?.find(user => user.id === userId);

    return {
      name: foundUser?.name,
    } as UseUserFullNamePayload;
  }, [users, userId]);

export default useUserFullName;
