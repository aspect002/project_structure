class UsersServices{
  #users = []

  getUsers(){
      return this.#users
  }
     creatUser(data){
      this.#users.push(data)
     }
     getUserById(id) {
      return this.#users.find(user => user.id === id);
    }

    updateUser(id, data) {
      const user = this.#users.find(user => user.id === id);

      if (user) {
        user.username = data.username;
        user.email = data.email;
        user.password = data.password;
        return user;
      }

      return null;
    }
    updateUserPassword(id, password) {
      const user = this.#users.find(user => user.id === id);

      if (user) {
        user.password = password;
        return user;
      }

      return null;
    }
}
module.exports = new UsersServices()
