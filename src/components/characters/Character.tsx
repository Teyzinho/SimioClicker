import "./character.css"
import babananaImg from "../../assets/bananaIcon.png"
import { useDispatch } from "react-redux"
import {
    incrementClickPerSecond,
    reduce,
    incrementCharacters
} from "../../state/counterSlice"
import { useAppSelector } from '../../hooks';

const Character = ({ character }) => {
    const dispatch = useDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const charactersAmount = useAppSelector((state) => state.counter.characters);
    const characterData = charactersAmount.find((char) => char.id === character.id);

    function handelClick(character) {
        if (count >= character.cost) {
            dispatch(incrementClickPerSecond(character.productionAddition))
            dispatch(reduce(character.cost))
            dispatch(incrementCharacters(character))
        }
    }

    return (
        <div className={`character ${count >= character.cost ? "" : "character-locked"}`}
            onClick={() => handelClick(characterData)}
        >
            <img className="monkeyImg" src={character.imagePath} alt="" />
            <div className="character-details">
                <div>
                    <h3>{character.name}</h3>
                    <span className="cost"
                        style={{
                            color: count >= character.cost ? "#6f6" : "#f66",

                        }}
                    >
                        <img src={babananaImg} alt="banana" />
                        {characterData.cost}
                    </span>
                    <p>Bps: {character.productionAddition}</p>

                </div>

                <div className="quantidade">
                    {characterData ? characterData.amount : 0}
                </div>

            </div>
        </div>
    )
}

export default Character