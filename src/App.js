import './App.css';
import ThemeInputField from './components/ThemeInputField';
import React from 'react';

class App extends React.Component {
  // JSON dinhi
  // constructor(props) {
  //   super(props);
  //   this.
  //   this.onChangeFirstName = this.onChangeFirstName.bind(this);
  // }
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    emailWarning: '',
    emailValidation: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    disableSubmit: true
  }
  // method para sa pag click dinhi 
  onChangeFirstName = (event) => {
      this.setState({firstName: event.target.value});
  }

  onChangeEmail = (event) => {
    let tae = event.target.value;
    this.setState({email: tae});
    if (!tae.match(this.state.emailValidation)) {
      this.setState({emailWarning: 'Huy! mali imong email doy!'});
    } else {
      this.setState({emailWarning: ''});
    }
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  onChangeConfirm = (event) => {
    this.setState({confirm: event.target.value});
  }

  onChangeLastName = (event) => {
    this.setState({lastName: event.target.value});
  }

  onClickSubmit() {
    let data = this.state;
    if (data.email !== '' && data.email.match(data.emailValidation) && data.password !== '' && data.confirm !== '' && data.password === data.confirm) {
      console.log('valid');
    } else {
      console.log('dili valid');
    }
  }

  render() {
    const { firstName, lastName, email, password, confirm } = this.state;
    return (
      <>
        <h1>
          Kalibangon ko
        </h1>
        <ThemeInputField placeholder='First Name' value={firstName} onChangeTheme={this.onChangeFirstName} label='First Name: ' />
        {/* <div>
          <input placeholder='firstname' value={firstName} onChange={this.onChangeFirstName}></input>
        </div> */}
        <div style={{marginTop: 10, marginBottom: 10}}>
          <input placeholder='lastname' value={this.state.lastName} onChange={this.onChangeLastName.bind(this)}></input>
        </div>
        <div>
          <input placeholder='email' value={this.state.email} onChange={this.onChangeEmail.bind(this)}></input>
          <p>{this.state.emailWarning}</p>
        </div>
        <div>
          <input placeholder='password' value={this.state.password} onInput={this.onChangePassword.bind(this)}></input>
        </div>
        <div>
          <input placeholder='confirm' value={this.state.confirm} onChange={this.onChangeConfirm.bind(this)}></input>
        </div>
        <div>
          {/* <ThemeButton text="Kalibanogn ko" /> */}
          <button onClick={this.onClickSubmit.bind(this)}>Submit</button>
        </div>
    </>
    )
  }
}

export default App;
