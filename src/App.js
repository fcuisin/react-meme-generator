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

      <ApiFetch/>

      </div>

    </div>
  );
}

export default App;
