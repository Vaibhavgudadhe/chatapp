import React, { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ChatList() {
  const [allUsers, setAllUsers] = useState([]);

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // const getUsers = () => {
  //   const userCollectionRef = collection(db, 'user');
  //   getDocs(userCollectionRef)
  //     .then((res) => {
  //       const data = res.docs.map((doc) => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));
  //       setAllUsers(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  useEffect(() => {
    const userCollectionRef = collection(db, 'user');
    const unsubscribe = onSnapshot(userCollectionRef, (snapsort) => {
      setAllUsers(
        snapsort.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {allUsers.map((user) => (
        <ChatItem
          key={user.data.id}
          name={user.data.fullname}
          profileUrl={user.data.photoURL}
        />
      ))}
    </div>
  );
}
