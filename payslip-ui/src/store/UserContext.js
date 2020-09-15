import React, { useState, createContext, useEffect } from 'react';
import agent from '../api/agent';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(1);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const users = await agent.Users.list();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  // async function loadUser() {
  //   const response = await agent.Users.details();
  //   console.log(response, 'value');
  //   setSelectedUser(response);
  // }
  // loadUser();

  return (
    <UserContext.Provider
      value={[users, setUsers, selectedUser, setSelectedUser]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
