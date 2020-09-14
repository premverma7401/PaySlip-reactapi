import { createContext } from 'react';
import { observable, action, decorate, computed } from 'mobx';
import agent from '../api/agent';

class UserStore {
  users = [];
  selectUser = {};
  loadingInitial = false;

  loadUsers = async () => {
    this.loadingInitial = true;
    try {
      const users = await agent.Users.list();
      users.forEach((user) => {
        this.users.push(user);
      });
      this.loadingInitial = false;
    } catch (error) {
      console.log(error);
    }
  };

  loadUser = async (id) => {
    this.loadingInitial = true;
    try {
      var user = await agent.Users.details(id);
      this.selecteduser = user;
      this.loadingInitial = false;
    } catch (error) {
      console.log(error);
    }
  };
  selectUser = (id) => {
    this.loadUser(id);
  };
}
decorate(UserStore, {
  users: observable,
  selectUser: observable,
  selecteduser: observable,
  loadingInitial: observable,
  loadUsers: action,
  loadUser: action,
});
export default createContext(new UserStore());
