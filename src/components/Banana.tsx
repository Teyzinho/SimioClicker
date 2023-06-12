import bananaImg from "../assets/banana.png"
import "./Banana.css"
import { useDispatch } from 'react-redux';
import { increment } from "../state/counter";
import { useAppSelector } from "../hooks"
import mouseUpgradesData from "../upgrades/upgradesData"

const Banana = () => {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useDispatch();

    interface UpgradeData {
        key: string;
        name: string;
        image: string;
        cost: number;
        clickMultiplier: number;
        productionMultiplier: number;
        prerequisites: string[];
    }
    class Upgrade {
        key
        name
        image
        cost
        clickMultiplier
        productionMultiplier
        prerequisites
        active

        constructor(data: UpgradeData) {
            this.key = data.key;
            this.name = data.name;
            this.image = data.image;
            this.cost = data.cost;
            this.clickMultiplier = data.clickMultiplier;
            this.productionMultiplier = data.clickMultiplier;
            this.prerequisites = data.prerequisites;
            this.active = false;
        }
    }
    class BananaClass {
        numClick
        powerClick
        constructor(numClick: number, powerClick: number) {
            this.numClick = numClick;
            this.powerClick = powerClick;
        }
        click = () => {
            dispatch(increment(this.powerClick))
        }
    }

    const handleUpgradeClick = (upgrade: Upgrade) => {
        // Implementar a lógica para ativar o upgrade aqui
        console.log(`Clicou no upgrade: ${upgrade.name}`);
    };

    const banana = new BananaClass(0, 1)
    const mouseUpgrades: Upgrade[] = mouseUpgradesData.map((update) => new Upgrade(update));
    console.log(mouseUpgrades)

    return (
        <div className="banana-container">
            <img src={bananaImg} alt="banana" />

            <button onClick={banana.click}>
                Increment Banana {count}
            </button>

            <div className="upgrades-container">
                {mouseUpgrades.map((upgrade) => (
                    <button
                        key={upgrade.key}
                        onClick={() => handleUpgradeClick(upgrade)}
                    /*disabled={ Adicione a lógica de desabilitar o botão com base nas pré-requisitos e condições }*/
                    >
                        {upgrade.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Banana;