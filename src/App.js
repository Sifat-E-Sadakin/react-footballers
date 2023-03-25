import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import LoadPlayers from './components/LoadPlayers/LoadPlayers';
import Info from './components/Info/Info';

function App() {
  return (
    <div className="App">
      <h1> Find Your Footballer </h1>
      <Search></Search>
      <LoadPlayers></LoadPlayers>
      
    </div>
  );
}

export default App;
