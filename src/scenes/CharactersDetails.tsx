import Character from "../components/characters/Character"
import { characterData, CharacterInterface } from "../data/characters/charactersData"

const CharactersDetails = () => {
    return (
        <div>
            Detalhes Personagens
            {characterData.map((character: CharacterInterface) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharactersDetails