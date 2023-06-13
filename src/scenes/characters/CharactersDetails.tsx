import Character from "../../components/characters/Character"
import { characterData, CharacterInterface } from "../../data/characters/charactersData"
import "./CharactersDetails.css"

const CharactersDetails = () => {
    return (
        <div className="character-container">
            <div className="character-header">
                <h1>Loja</h1>
            </div>
            {characterData.map((character: CharacterInterface) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharactersDetails