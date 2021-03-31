import Header from './components/Header.js';
import ApiFetch from './components/Images-list.js'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="App-container">
        <div className="App-left-container">

        </div>
        <div className="App-right-container">
          <ApiFetch/>
        </div>
      </div>

    </div>
  );
}

export default App;
