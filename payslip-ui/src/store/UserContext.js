import React, { useState, createContext, useEffect } from 'react';
import agent from '../api/agent';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const users = await agent.Users.list();
      console.log(users)
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <UserContext.Provider
      value={[users, setUsers, loadUsers, loading, setLoading]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
