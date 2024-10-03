import React from 'react';
import User from './user';


class Users extends React.Component{
  
    render(){
         if(this.props.users.length >0)
     return (<div className='users'> 
                {this.props.users.map((el)=>(<User  editUser={this.props.editUser} delUser={this.props.delUser} key={el.id} user={el} />))} 
            </div>)
      
      else return(<div className='user'>  <h3>Пользователей нет</h3> </div>)
}}
  export default Users


  