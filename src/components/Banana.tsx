import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../state/counter';
import { useAppSelector } from '../hooks';
import bananaImg from '../assets/banana.png';
import './Banana.css';

interface Upgrade {
  id: number;
  name: string;
  cost: number;
  clickMultiplier: number;
  productionMultiplier: number;
}

class BananaClicker {
  public Bananas: number;
  public upgrades: Upgrade[];
  private dispatch: Function;

  constructor(dispatch: Function, count: number) {
    this.Bananas = count;
    this.upgrades = [];
    this.dispatch = dispatch;
  }

  clickBanana() {
    this.updateBananasDisplay();
    console.log(this.Bananas);
  }

  acquireUpgrade(upgrade: Upgrade): void {
    if (this.Bananas >= upgrade.cost && !this.hasUpgrade(upgrade)) {
      this.Bananas -= upgrade.cost;
      this.upgrades.push(upgrade);
      this.updateBananasDisplay();
      this.updateUpgradesDisplay();
      this.applyUpgrade(upgrade);
    }
  }

  hasUpgrade(upgrade: Upgrade): boolean {
    return this.upgrades.some((u) => u.id === upgrade.id);
  }

  applyUpgrade(upgrade: Upgrade): void {
    // Implemente a lógica do upgrade aqui, como aumentar a produção de Bananas por clique ou por segundo.
  }

  updateBananasDisplay() {
    // Utilize o dispatch para atualizar o contador no Redux
    this.dispatch(increment());
  }

  updateUpgradesDisplay(): void {
    // Atualize a exibição do número de upgrades adquiridos na interface do usuário.
  }
}

const Banana = () => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.value);
  const [qtdeBanana, setQtdeBanana] = useState(1);

  // Crie uma instância do BananaClicker passando o dispatch como argumento
  const game = new BananaClicker(dispatch, count);

  const upgrades: Upgrade[] = [
    {
      id: 1,
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
