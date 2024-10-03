import React from "react";
import Header from "./Header";
import Form from "./form";
import Users from "./users";
class UsersList extends React.Component {
  state = {
    users: [{id:1, firstname:1, secondname:1, accept:true},{id:2, firstname:2, secondname:2, accept:true},{id:3, firstname:3, secondname:3, accept:true}],
  };
   

  delUser = (id) => {
    console.log(id)
    this.setState({
      users: this.state.users.filter((el) => el.id !== id),
    });
    
  }

  addUser = (user) => {
    const id = this.state.users.length + 1;
    this.setState({ users: [...this.state.users, { id, ...user }] });
    
  }

  editUser = (edit, now) => {
    let allUsers = this.state.users;
    allUsers[edit.id-1] = edit;
   this.setState({users:[]}, ()=>{this.setState({ users: [...allUsers]})})
  }
  

  render() {
    return (
      <div className="InputProgect">
        <Header title="Список пользователей" />
        <div className="side">
        <main>
          <Users editUser={this.editUser}  users={this.state.users} delUser={this.delUser} />
        </main>
        <aside>
          <Form onAdd={this.addUser} />
        </aside>
        </div>
      </div>
    )
  }
}

export default UsersList;
