import React, { Component } from 'react';
import HomeReviews from './components/home/HomeReviews'
import HomeFans from './components/home/HomeFans'
//import Footer from './components/home/Footer'
import './reset.css'
import './App.css'


class App extends Component {
  constructor () {
    super()
    this.state = {
      currentView: 'Home'
    }
  }

render () {
  let { currentView } = this.state
  return (
    <div>

      <nav className="topnav">
        <button className="active" href="#home" onClick = {() => this.setState ({currentView: 'Home'})}>Home</button>
        <button href="#shows" onClick = {() => this.setState ({ currentView: "Shows"})}>Shows</button>
        <button href="#reviews" onClick = {() => this.setState ({ currentView: "Reviews"})}>Submit Review</button>
        <button href="#fanclub" onClick = {() => this.setState ({currentView: "Fan Club"})}>Join Fan Club</button>
        <button href="#contact" onClick = {() => this.setState ({currentView: "Contact"})}>Contact</button>
      </nav>

      {currentView === 'Home' ? <main>
        <p className="name">TONY CRAWFORD</p>
        <p className="text">See Latest Video</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KYEtysviXpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </main> : null}

      {currentView === 'Shows' ? <section className="shows">
        <p className="upcoming">Upcoming Shows</p>
          <ul>
            <li>Feb 5th Tipsy Alchemist - Dallas</li>
            <li>Feb 7th The Gin - Prosper</li>
            <li>Feb 8th Bar Louie - Arlington</li>
            <li>Feb 9th New J - McKinney</li>
            <li>Feb 13th Bar Louie - Garland</li>
            <li>Feb 14th Billiard Club - Terrell</li>
            <li>Feb 15th Private Party - Ft Worth</li>
            <li>Feb 16th New J - McKinney</li>
            <li>Feb 21st Bar Louie - Los Colinas</li>
            <li>Feb 22nd Private Party - Longview</li>
            <li>Feb 23rd New J - McKinney</li>
            <li>Feb 25th Felix Culpa - Dallas</li>
            <li>Feb 29th Private Party - Arlington</li>
          </ul>
      </section> : null}

      {currentView === 'Reviews' ? <section className="review">
        <HomeReviews />
      </section> : null}

      {currentView === 'Fan Club' ? <aside>
        <HomeFans />
      </aside> : null}

      {currentView === 'Contact' ? <summary>
        <h1>Contact for Booking:</h1>
        <br/>
        <h2>Traci Crawford</h2>
        <br/>
        <h2>tracicrawford11@yahoo.com</h2>
      </summary> : null}
  
  </div>
  
    
    )
  }
}


export default App;
