import React, { useState, useEffect } from 'react';
import bananaImg from "../assets/banana.png"
import "./Banana.css"
import { useDispatch } from 'react-redux';
import { increment,incrementClickPower } from "../state/counter";
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
            dispatch(increment())
        }
    }

    const handleUpgradeClick = (upgrade: Upgrade) => {
        // Implementar a lógica para ativar o upgrade aqui
        console.log(`Clicou no upgrade: ${upgrade.name}`);
        if(!upgrade.active){
            upgrade.active = !upgrade.active
            console.log(upgrade.active)
            dispatch(incrementClickPower(upgrade.clickMultiplier))
        }
    };

    const banana = new BananaClass(0, 1)
    const mouseUpgrades: Upgrade[] = mouseUpgradesData.map((update) => new Upgrade(update));
    console.log(mouseUpgrades)

    const [enabledUpgrades, setEnabledUpgrades] = useState<string[]>([]);

    useEffect(() => {
        const checkPrerequisites = (upgrade: Upgrade): boolean => {
            for (const prerequisite of upgrade.prerequisites) {
                if (!enabledUpgrades.includes(prerequisite)) {
                    return false;
                }
            }
            return true;
        };

        const enabledUpgradeKeys: string[] = [];

        for (const upgrade of mouseUpgrades) {
            if (checkPrerequisites(upgrade)) {
                enabledUpgradeKeys.push(upgrade.key);
            }
        }

        setEnabledUpgrades(enabledUpgradeKeys);
    }, [enabledUpgrades]);

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
                        disabled={!enabledUpgrades.includes(upgrade.key)}>
                    
                        {upgrade.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Banana;