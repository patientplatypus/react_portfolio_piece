

import React,  { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import ProfilePage from './components/ProfilePage';
import Messaging from './components/Messaging';
import NewsPage from './components/NewsPage';
import FriendBrowser from './components/FriendBrowser';
import StatisticsPage from './components/StatisticsPage';
import "./App.css";




class App extends Component {

  constructor(props){
    super(props);
    this.state={
      username: null,
      password: null,
      feeling: null,
      ponyArray: []
    }
    {/*this.handleLogIn = this.handleLogIn.bind(this);*/}
  }

  handleLogIn(username, password){
    {/*call to the backend and bcrypt goes here*/}
    console.log('inside App. username: ', username, ' password: ', password);
    this.setState({
      username:username,
      password:password
    },  function() {
        let newusername = this.state.username;
        console.log(newusername);

        axios.post('http://localhost:5000/User', {
          username: this.state.username,
          password: this.state.password
        })
        .then(function (response) {
          console.log("response from axios App.js", response);
        })
        .catch(function (error) {
          console.error("error from axios App.js", error);
        });
    });
  }

  handleSignUp(username, password){

  }

  handlePony(feeling){

    console.log("inside App. and my feeling is ", feeling);


{/*    this.setState({
      feeling: feeling,
      ponyArray: []
    }, function(){

        let ponyArray = this.state.ponyArray;

        axios.post('http://localhost:5000/User/ponys', {
          feeling: this.state.feeling
        })
          .then(function(response){
            let jsonobj = JSON.parse(response.data.body)
            console.log("pony return ok ", jsonobj);
            let keyindex = 0;
            jsonobj.faces.forEach(function(face){

                ponyArray.unshift({
                  image: face.image,
                  key: keyindex
                });
                keyindex+=1;

            });
            console.log("this is ponyArray inside handlepony ", ponyArray);
            console.log("this 'this' after ponyArray", this);
          })
          .catch(function(error){
            console.error("error from pony", error);
          });
    });*/}

    let ponyArray = [];

    axios.post('http://localhost:5000/User/ponys', {
      feeling:feeling
    })
      .then((response)=>{
        let jsonobj = JSON.parse(response.data.body);
        console.log('pony returned ok ', jsonobj);
        let keyindex = 0;
        jsonobj.faces.forEach(function(face){

            ponyArray.unshift({
              image: face.image,
              key: keyindex
            });
            keyindex+=1;

        });

        console.log('this', this);

        this.setState({
          ponyArray: ponyArray
        }, function(){
            console.log('ponyArray', ponyArray);
            console.log('this.state.ponyArray', this.state.ponyArray);
        });

      })
      .catch(function(error){
          console.error(error);
      });
  }



  render() {

    const xProfilePagex = () => {
      return(
        <div>
          <ProfilePage handleLogIn ={this.handleLogIn.bind(this)}
                       handleSignUp={this.handleSignUp.bind(this)}
                       handlePony  ={this.handlePony.bind(this)}
                       ponyArray   ={this.state.ponyArray}/>
        </div>
      )
    }

    const xMessagingx = () => {
      return(
        <div>
          <Messaging/>
        </div>
      )
    }

    const xNewsPagex = () => {
      return(
        <div>
          <NewsPage/>
        </div>
      )
    }


    const xFriendBrowserx = () => {
      return(
        <div>
          <FriendBrowser/>
        </div>
      )
    }

    const xStatisticsPagex = () => {
      return(
        <div>
          <StatisticsPage/>
        </div>
      )
    }

    return (
      <div className='container'>
        <Router>
          <div>
          <h1>FRENDLI</h1>
            <nav className='tabs'>
              <li><Link to="/ProfilePage">GO 2 U</Link></li>
              <li><Link to="/Messaging">SAY HI:D</Link></li>
              <li><Link to="/NewsPage">News of the Weird</Link></li>
              <li><Link to="/FriendBrowser">B FRENDLI:P</Link></li>
              <li><Link to="/StatisticsPage">Numbers! YAYAY~ </Link></li>
            </nav>

            <Route exact path="/" component={xProfilePagex}/>
            <Route path="/ProfilePage" component={xProfilePagex}/>
            <Route path="/Messaging" component={xMessagingx}/>
            <Route path="/NewsPage" component={xNewsPagex}/>
            <Route path='/FriendBrowser' component={xFriendBrowserx}/>
            <Route path='/StatisticsPage' component={xStatisticsPagex}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
