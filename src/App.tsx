import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UserService from './api/UserService'

function App() {
    UserService.getContactList().then((results) => {
      console.log(results);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact List
        </p>
      </header>
      <main>

      </main>
      <footer>
        powered by&nbsp;
        <a
          className="powered-by-link"
          href="https://randomuser.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RANDOM USER GENERATOR
        </a>
      </footer>
    </div>
  );
}

export default App;
