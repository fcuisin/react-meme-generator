import trollface from '../trollface.png';

function Header() {

  return (
    <header className="App-header">

      <img src={trollface}  className="App-logo" alt="troll-face"/>
      <h1>Meme Generator</h1>
      <img src={trollface}  className="App-logo" alt="troll-face"/>

    </header>
  );

}

export default Header
