import React, {useState} from 'react';
import Input from '../src/features/Input'
import './App.css';




function App() {
  const [searchData, setSearchData] = useState('')


  return (
    <div className="App">
     <h1>Hacker News Algolia API</h1>
     <Input/>
     <p>{searchData}</p>
    </div>
  );
}

export default App;
