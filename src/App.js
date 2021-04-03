import React, {useState} from 'react';
import Header from './components/Header.js';
import ApiFetch from './components/Images-list.js';
import MemeMaker from './components/Editor.js'
import './App.css';

function App() {

  const [selectedImg, setSelectedImg] = useState({});

  const selectImg = (data) => {
    setSelectedImg(data)
  }

  return (
    <div>
      <Header/>
      <div className="App-container">
        <div className="App-right-container">
          <h2 className="App-container-title">1. Pick a base</h2>
          <ApiFetch selectImg={selectImg}/>
        </div>
        <div className="App-left-container">
          <h2 className="App-container-title">2. Be creative</h2>
          <MemeMaker data={selectedImg}/>
        </div>
      </div>

    </div>
  );
}

export default App;
