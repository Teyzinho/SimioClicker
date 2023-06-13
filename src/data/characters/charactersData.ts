import macacoPregoImg from "../../assets/prego2.png"
import gibaoCinzaImg from "../../assets/gibao-cinza.avif"
import chimpanzeImg from "../../assets/Chimpanze.png"
import micoLeaoDouradoImg from "../../assets/mico-leado-dourado.jpg"
export interface CharacterInterface{
    id: number | string;
    name: string;
    cost: number;
    productionAddition: number;
    imagePath: string;
    amount:number;
}

export const characterData: CharacterInterface[]= [
    {
        id: "macaco1",
        name: 'Macaco Prego',
        cost: 15,
        productionAddition: 1,
        imagePath: macacoPregoImg,
        amount:0,
    },
    {
        id: "macaco2",
        name: 'Gibao-cinza',
        cost: 100,
        productionAddition: 2.5,
        imagePath: gibaoCinzaImg,
        amount:0,
    },
    {
        id: "macaco3",
        name: 'Chimpanzé',
        cost: 500,
        productionAddition: 5,
        imagePath: chimpanzeImg,
        amount:0,
    },
    {
        id: "macaco4",
        name: 'Mico-leão-dourado',
        cost: 1000,
        productionAddition: 10,
        imagePath: micoLeaoDouradoImg,
        amount:0,
    },
]