

import React, { Component } from 'react';
import Factoids from './frontpagecomponents/Factoids';
import HeadShot from './frontpagecomponents/HeadShot';
import Splash from './frontpagecomponents/Splash';
import LogIn from './frontpagecomponents/LogIn';
import PonyImage from './frontpagecomponents/PonyImage';

class ProfilePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      handleLogIn: this.props.handleLogIn,
      handleSignUp: this.props.handleSignUp,
      handlePony: this.props.handlePony,
      username: this.props.username,
      password: this.props.password,
      feeling: this.props.feeling,
      ponyArray: this.props.ponyArray
    }
  }

  handlePony(e){
    e.preventDefault();
    this.props.handlePony(this.state.feeling);
    console.log('inside handlePony, feeling: ', this.state.feeling);
  }

  render() {

      console.log('right before const ponys in profile page. ponyArray;', this.state.ponyArray);

      const ponys=this.state.ponyArray.map((pony)=>{
        console.log('inside const pony. pony', pony);
        return <PonyImage key={pony.key} imageUrl={pony.image} alt=''/>
      });

    return (
      <div>
        <h1>ProfilePage</h1>
        {ponys}
        <LogIn handleLogIn ={this.state.handleLogIn.bind(this)}
               handleSignUp={this.state.handleSignUp.bind(this)}
               handlePony  ={this.state.handlePony.bind(this)}/>

               <form className="feelingClass">
                 <h2>How are you feeling today?</h2>
                 <select onChange={(e)=>this.setState({feeling: e.target.value})}>
                   <option value="clickme">Click me!</option>
                   <option value="sexy">Sexy</option>
                   <option value="sad">Sad</option>
                   <option value="weird">Weird</option>
                   <option value="awesome">Awesome</option>
                   <option value="angry">Angry</option>
                   <option value="annoyed">Annoyed</option>
                   <option value="awkward">Awkward</option>
                   <option value="scientist">Scientist</option>
                 </select>
                 <button onClick={(e)=>this.handlePony(e)}>Submit Feels</button>
               </form>

        <Factoids/>
        <HeadShot/>
        <Splash/>
      </div>
    );
  }
}

export default ProfilePage;
