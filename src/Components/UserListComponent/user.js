import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import Form from './form';


class User extends React.Component{
  
 
  state ={
    editUser : false
  }
    user1 = this.props.user

    closeForm = (state) => {
      this.setState({editUser: state})
    }

    render(){
    
     return (   
          <div className='user' >
            <IoCloseCircleSharp onClick={()=>this.props.delUser(this.user1.id)} className="del"/>
            <IoHammerSharp onClick={()=>this.setState({editUser: !this.state.editUser})} className='edit'/>
          <h3>{this.user1.secondname} {this.user1.firstname}</h3>
          <p>{this.user1.age} {(this.user1.age>1 && this.user1.age<5) ? "года": "лет" } {this.user1.bio}</p> 
          <div>{this.state.editUser && <Form user={this.user1} closeForm={this.closeForm} onAdd={this.props.editUser} />}</div>
          </div> ) 
        } 
        
               
}

  export default User