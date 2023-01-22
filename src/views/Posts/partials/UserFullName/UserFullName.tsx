import React from 'react';
import User from 'types/user';
import useUserFullName from 'utils/hooks/useUserFullName';

import styles from './UserFullName.module.scss';

interface UserFullNameProps {
  users: User[] | null;
  userId: number;
}

const UserFullName: React.FC<UserFullNameProps> = ({ users, userId }) => {
  const fullName = useUserFullName(users, userId);

  return <div className={styles.container}>{fullName.name}</div>;
};

export default UserFullName;
