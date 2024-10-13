import { getUserSession } from '@/functions/userSession';
import { useAppDispatch } from '@/store/hooks';
import { updateUser } from '@/store/slices/user';
import React from 'react';

const GetUserSession = () => {
  const userSession = getUserSession();
  const dispatch = useAppDispatch();
  if (userSession) {
    dispatch(updateUser({ user: userSession }));
  }
  return <></>;
};

export default GetUserSession;
