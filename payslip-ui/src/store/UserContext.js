import React, { useState, createContext, useEffect } from 'react';
import agent from '../api/agent';
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [desiStats, setdesiStats] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    try {
      setLoading(true);
      const users = await agent.Users.list();
      console.log(users);
      setUsers(users);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const loadDesignationStats = async () => {
    try {
      setLoading(true);
      const desiStats = await agent.Users.statList();
      console.log('stats', desiStats);
      setdesiStats(desiStats);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={[
        users,
        setUsers,
        loadUsers,
        loading,
        setLoading,
        loadDesignationStats,
        desiStats,
        setdesiStats,
      ]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
