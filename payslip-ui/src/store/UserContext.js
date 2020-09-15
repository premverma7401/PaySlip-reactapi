import React, { useState, createContext, useEffect } from 'react';
import agent from '../api/agent';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const users = await agent.Users.list();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <UserContext.Provider value={[users, setUsers, loadUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
