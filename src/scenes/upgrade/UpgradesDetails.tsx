import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import {
    reduce,
    incrementClickPower,
    incrementUpgrades,
} from '../../state/counterSlice';
import { Upgrade } from '../../data/upgrades/upgradesData';
import { upgrades } from '../../data/upgrades/upgradesData';
import "./UpgradesDetails.css"
import SimioContainer from '../../components/simioContainer/SiomioContainer';


const UpgradesDetails = () => {

    const dispatch = useDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const upgradeId = useAppSelector((state) => state.counter.upgrades);
    const charactersWithAmount = useAppSelector((state) =>
        state.counter.characters.filter((character) => character.amount > 0)
    );

    const handleUpgradeClick = (upgrade: Upgrade) => {
        if (count >= upgrade.cost && !hasUpgrade(upgrade)) {
            handelReduce(upgrade.cost) //Reduz a quantidade de bananas
            dispatch(incrementUpgrades(upgrade.id));
            updateUpgradesDisplay();
            applyUpgrade(upgrade);
        };
    }

    function handelReduce(price: number) {
        dispatch(reduce(price)) //reduz quantia de bananas
    }

    function hasUpgrade(upgrade: Upgrade): boolean {
        return upgradeId.some((u) => u === upgrade.id); //verifica se o update ja foi feito pelo id
    }

    function applyUpgrade(upgrade: Upgrade): void {
        dispatch(incrementClickPower(upgrade.clickMultiplier))
    }

    function updateUpgradesDisplay(): void {
    }

    return (
        <div className='upgradesContainer'>

            <div className="upgrades-container">
                {upgrades.map((upgrade) => (
                    <button
                        key={upgrade.id}
                        onClick={() => handleUpgradeClick(upgrade)}
                        disabled={hasUpgrade(upgrade)}
                    >
                        {upgrade.name} - Cost: {upgrade.cost}
                    </button>
                ))}
            </div>

            {charactersWithAmount.map((character) => (
                <SimioContainer key={character.id} character={character} />
            ))}
            
        </div>
    )
}

export default UpgradesDetails