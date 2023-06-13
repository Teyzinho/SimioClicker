import "./character.css"
// import React from "react";
// import { CharacterInterface } from "../../data/characters/charactersData"
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
    console.log(characterData)

    function handelClick(character) {
        if (count >= character.cost) {
            dispatch(incrementClickPerSecond(character.productionAddition))
            dispatch(reduce(character.cost))
            dispatch(incrementCharacters(character))
        }
    }

    return (
        <div className="character" onClick={() => handelClick(character)}>
            <img src={character.imagePath} alt="" />
            <div className="character-details">
                <p>{character.name}</p>
                <p>R${character.cost}</p>
                <p>Production: {character.productionAddition}</p>
                <p>Quantidade : {characterData ? characterData.amount : 0} </p>
            </div>
        </div>
    )
}

export default Character