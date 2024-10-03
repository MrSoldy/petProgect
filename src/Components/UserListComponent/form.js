import React from "react";

class Form extends React.Component {
  add={};
  state = {
    firstname: "",
    secondname: "",
    bio: "",
    age: "",
    accept: "",
  };

  render() {
    return (
      <form className="form" ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Имя"
          value={this.state.firstname}
          onChange={(e) => this.setState({ firstname: e.target.value })}
        />
        <input
          placeholder="Фамилия"
          value={this.state.secondname}
          onChange={(e) => this.setState({ secondname: e.target.value })}
        />
        <input
          placeholder="Возраст"
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <textarea
          placeholder="Информация о себе"
          value={this.state.bio}
          onChange={(e) => this.setState({ bio: e.target.value })}
        />
        <label htmlFor="accept">Соглашение на обработку данных</label>
        <input
          className="box"
          type="checkbox"
          checked={this.state.accept}
          id="accept"
          onChange={(e) => this.setState({ accept: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            const { firstname, secondname, accept, age, bio } = this.state;

            if (firstname && secondname && accept) {

              this.myForm.reset();
              this.add={
                 firstname,
                secondname,
                age,
                bio,
                accept,
              }
              if(this.props.user)
              this.add.id=this.props.user.id
              this.props.onAdd(this.add);
              

              this.setState({
                firstname: "",
                secondname: "",
                bio: "",
                age: "",
                accept: false,
                now: this.props.userNow
              });
              this.props.closeForm(false)
            }
          }}
        >
          Добавть
        </button>
      </form>
    );
  }
}
export default Form;
