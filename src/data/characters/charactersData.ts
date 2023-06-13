import macacoPregoImg from "../../assets/macaco-prego.png"

export interface CharacterInterface{
    id: number | string;
    name: string;
    cost: number;
    productionAddition: number;
    imagePath: string;
}

export const characterData: CharacterInterface[]= [
    {
        id: "macaco1",
        name: 'Macaco Prego',
        cost: 15,
        productionAddition: 1,
        imagePath: macacoPregoImg,
    }
]