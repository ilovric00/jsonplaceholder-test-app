import React from 'react';
import Typography from 'components/Typography';
import useUserFullName from 'utils/hooks/useUserFullName';

import { useUsers } from 'utils/context/UsersContext';

import styles from './UserFullName.module.scss';

interface UserFullNameProps {
  userId: number;
}

const UserFullName: React.FC<UserFullNameProps> = ({ userId }) => {
  const { users } = useUsers();
  const fullName = useUserFullName(users, userId);

  return (
    <Typography variant="label1" className={styles.container}>
      {fullName.name}
    </Typography>
  );
};

export default UserFullName;
