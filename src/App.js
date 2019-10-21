import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js'
import ToDo from './ToDo.js'
import ContactCard from './contactCard';
import Jokes from './Jokes.js'
import JokesData from './JokesData'

function App() {

  const jokesComponents = JokesData.map((joke) => {
    return (
      <Jokes question={joke.question} punch={joke.punchline}/>
    )
  })
  console.log(jokesComponents)
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
    <div>
      {jokesComponents}
    </div>
      
    </div>
  );
}

export default App;
