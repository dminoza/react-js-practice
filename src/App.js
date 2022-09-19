import logo from './logo.svg';
import './App.css';
import React from 'react';
import ThemeButton from './components/Buttons/ThemeButton';

class App extends React.Component {
  // JSON dinhi
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm: '',
      emailWarning: '',
      emailValidation: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      disableSubmit: true
    }
  }
  // method para sa pag click dinhi 
  onChangeFirstName = (event) => {
      this.setState({firstName: event.target.value});
      // this.validateAll();
  }

  onChangeEmail = (event) => {
    let tae = event.target.value;
    this.setState({email: tae});
    if (!tae.match(this.state.emailValidation)) {
      this.setState({emailWarning: 'Huy! mali imong email doy!'});
    } else {
      this.setState({emailWarning: ''});
    }
    this.validateAll();
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value});
  }

  onChangeConfirm = (event) => {
    this.setState({confirm: event.target.value});
    this.validateAll();
  }

  onChangeLastName = (event) => {
    this.setState({lastName: event.target.value});
    // this.validateAll();
  }

  onClickSubmit() {
    
    console.log(this.state);
  }

  render() {
    return <>
        <h1>
          Kalibangon ko
        </h1>
        <div>
          <input placeholder='firstname' value={this.state.firstName} onChange={this.onChangeFirstName.bind(this)}></input>
        </div>
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
          <ThemeButton text="Kalibanogn ko" />
          {/* <button onClick={this.onClickSubmit.bind(this)}>Submit</button> */}
        </div>
    </>
  }
}

export default App;
