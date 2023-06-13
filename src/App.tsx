import './App.css';
import Banana from "./components/banana/Banana";
import CharactersDetails from "./scenes/CharactersDetails";
import UpgradesDetails from './scenes/UpgradesDetails';

function App() {

  return (
    <div className='App'>
      <CharactersDetails />
      <Banana />
      <UpgradesDetails />
    </div>
  )
}

export default App
