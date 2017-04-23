

import React, { Component } from 'react';


class LogIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password,
    }
  }


  handleLogIn(e){
    e.preventDefault();
    this.props.handleLogIn(this.state.username, this.state.password);

    console.log('inside login. username: ', this.state.username, ' password: ', this.state.password);

  }


  handleSignUp(e){
    e.preventDefault();
    this.props.handleSignUp(this.state.username, this.state.password);

    console.log('inside signup. username: ', this.state.username, ' password: ', this.state.password);

  }




  render() {
          return (
            <div>
              <p>LogIn</p>
              <form name="log-in" id="log-in">

                <input
                onChange={(e)=>this.setState({username: e.target.value })}
                type="text"
                name="question"
                id="question"
                placeholder="username"/>

                <input
                onChange={(e)=>this.setState({password: e.target.value })}
                type="text"
                name="question"
                id="question"
                placeholder="password"/>

                <button onClick={(e)=>this.handleLogIn(e)}>Log In</button>
                <button onClick={(e)=>this.handleSignUp(e)}>Sign Up</button>
              </form>





            </div>
          );
        }
}

export default LogIn;
