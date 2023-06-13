import './App.css';
import Banana from "./components/banana/Banana";
import CharactersDetails from "./scenes/characters/CharactersDetails";
import UpgradesDetails from './scenes/upgrade/UpgradesDetails';
import AddPerSecond from './components/addPerSecond/AddPerSecond';

function App() {

  return (
    <div className='App'>
      <CharactersDetails />
      <div>
        <AddPerSecond />
        <Banana />
      </div>
      <UpgradesDetails />
    </div>
  )
}

export default App
