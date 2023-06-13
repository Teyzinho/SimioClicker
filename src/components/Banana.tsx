import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import bananaImg from '../assets/banana.png';
import './Banana.css';
import {
  increment,
  reduce,
  incrementClickPower,
  incrementUpgrades
} from '../state/counter';

interface Upgrade {
  id: number | string;
  name: string;
  cost: number;
  clickMultiplier: number;
  productionMultiplier: number;
}

class BananaClicker {
  public Bananas
  public upgrades
  public dispatch

  constructor(dispatch: Function, count: number, upgradeId:any) {
    this.Bananas = count;
    this.upgrades = upgradeId;
    this.dispatch = dispatch;
    console.log("stateUpdates",upgradeId)
  }

  clickBanana() {
    this.dispatch(increment());
    console.log(this.Bananas);
    console.log("upgrades:", this.upgrades)

  }

  acquireUpgrade(upgrade: Upgrade): void {
    if (this.Bananas >= upgrade.cost && !this.hasUpgrade(upgrade)) {
      // this.Bananas -= upgrade.cost;
      this.reduce(upgrade.cost) //Reduz a quantidade de bananas

      this.dispatch(incrementUpgrades(upgrade));

      this.updateUpgradesDisplay();
      this.applyUpgrade(upgrade);
    }
  }

  reduce(price: number) {
    this.dispatch(reduce(price))
  }

  hasUpgrade(upgrade: Upgrade): boolean {
    return this.upgrades.some((u:any) => u.id === upgrade.id);
  }

  applyUpgrade(upgrade: Upgrade): void {
    // Implemente a lógica do upgrade aqui, como aumentar a produção de Bananas por clique ou por segundo.
    this.dispatch(incrementClickPower(upgrade.clickMultiplier))
  }


  updateUpgradesDisplay(): void {
    // Atualize a exibição do número de upgrades adquiridos na interface do usuário.
  }
}
const Banana = () => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const upgradeId = useAppSelector((state) => state.counter.upgrades);

  // Crie uma instância do BananaClicker passando o dispatch como argumento
  const game = new BananaClicker(dispatch, count, upgradeId);

  const upgrades: Upgrade[] = [
    {
      id: "clickup1",
      name: 'Click Upgrade 1',
      cost: 10,
      clickMultiplier: 2,
      productionMultiplier: 1,
    },
    {
      id: 2,
      name: 'Production Upgrade 1',
      cost: 50,
      clickMultiplier: 1,
      productionMultiplier: 2,
    },
    // Adicione mais upgrades conforme necessário
  ];

  const handleUpgradeClick = (upgrade: Upgrade) => {
    game.acquireUpgrade(upgrade);
  };

  return (
    <div className="banana-container">
      <img src={bananaImg} alt="banana" />

      <button onClick={() => game.clickBanana()}>Quantidade {count}</button>

      <div className="upgrades-container">
        {upgrades.map((upgrade) => (
          <button
            key={upgrade.id}
            onClick={() => handleUpgradeClick(upgrade)}
            disabled={game.hasUpgrade(upgrade)}
          >
            {upgrade.name} - Cost: {upgrade.cost}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banana;
