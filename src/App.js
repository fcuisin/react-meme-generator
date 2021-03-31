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
        <div className="App-left-container">
          <MemeMaker data={selectedImg}/>
        </div>
        <div className="App-right-container">
          <ApiFetch selectImg={selectImg}/>
        </div>
      </div>

    </div>
  );
}

export default App;
