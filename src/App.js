import React, {useState} from 'react';
import './App.css';
import {searchQuery} from '../src/features/Search'


function App() {

  const [text, setText] = useState('')
  console.log(text)
  return (
    <div className="App">
     <h1>Hacker News Algolia API</h1>
     <form onSubmit={searchQuery(text)}>
     <input
     type='text'
     value={text}
     onChange={(e) => setText(e.target.value)}
     />
     <input
     value="submit"
     type="submit"
     />
     </form>
    </div>
  );
}

export default App;
