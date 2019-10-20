import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js'
import ToDo from './ToDo.js'
import ContactCard from './contactCard';
import Jokes from './Jokes.js'

function App() {
  return (
    <div>
      <nav>
        <h1>Hello, This is upper body and list of some items</h1>
        <ul>
          <li>Eggs</li>
          <li>Milk</li>
          <li>Cornflakes</li>
        </ul>
      </nav>
      <main>
        <p>This is my main body!</p>
      </main>
      <Footer />

      <ToDo />
      <h1>Contact List: </h1>
      <ContactCard 
        contact={{name: "Mr Cute Doggy", url: "https://homepages.cae.wisc.edu/~ece533/images/cat.png", phone:"8942977749"}}
      />
      <ContactCard 
        contact={{name: "Mr Fluffy Doggy", url: "https://homepages.cae.wisc.edu/~ece533/images/girl.png", phone:"8942977749"}}
      />
      <ContactCard 
        contact={{name: "Mr Best Doggy", url: "https://homepages.cae.wisc.edu/~ece533/images/fruits.png", phone:"8942977749"}}
      />

   
    <h1>Jokes Time : </h1>
    <Jokes 
      jokes={{
        question: "What is the difference between your wife and your job?",
        punch: "After five years your job still sucks."}}
    />
    <Jokes 
      jokes={{
        question: "Why are hurricanes normally named after women?",
        punch: "When they come they're wild and wet, but when they go they take your house and car with them."}}
    />
    <Jokes 
      jokes={{
        punch: "After five years your job still sucks."}}
    />
    </div>
  );
}

export default App;
