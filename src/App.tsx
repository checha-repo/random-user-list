import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ContactList from './components/ContactList/ContactList';

function App() {

  return (
    <div className="App">
      <main>
        <ContactList />
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
