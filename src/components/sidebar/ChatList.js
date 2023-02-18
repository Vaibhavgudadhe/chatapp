import React, { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import Count from '../chatBox/count';

export default function ChatList(props) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const userCollectionRef = collection(db, 'user');
    const unsubscribe = onSnapshot(userCollectionRef, (snapsort) => {
      setAllUsers(
        snapsort.docs
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
          .filter((doc) => doc.data.email !== props.user)
      );
    });
    return () => {
      unsubscribe();
    };
  }, [props.user]);

  const searchedUser = allUsers.filter((user) => {
    if (props.search) {
      if (
        user.data.fullname.toLowerCase().includes(props.search.toLowerCase())
      ) {
        return user;
      }
    }
    return null;
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <ChatItem
        key={user.id}
        id={user.id}
        name={user.data.fullname}
        profileUrl={user.data.photoURL}
        email={user.data.email}
      />
    );
  });

  return (
    <div>
      <Count/>
      {searchItem.length > 0
        ? searchItem
        : allUsers.map((user) => (
            <ChatItem
              key={user.id}
              id={user.id}
              name={user.data.fullname}
              profileUrl={user.data.photoURL}
              email={user.data.email}
            />
          ))}
    </div>
  );
}
