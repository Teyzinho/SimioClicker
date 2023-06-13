import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import {
    reduce,
    incrementClickPower,
    incrementUpgrades
} from '../state/counterSlice';
import { Upgrade } from '../data/upgrades/upgradesData';
import { upgrades } from '../data/upgrades/upgradesData';


const UpgradesDetails = () => {

    const dispatch = useDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const upgradeId = useAppSelector((state) => state.counter.upgrades);

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
        <div>
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
        </div>
    )
}

export default UpgradesDetails