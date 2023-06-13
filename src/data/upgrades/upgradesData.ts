export interface Upgrade {
    id: number | string;
    name: string;
    description:string;
    img: string;
    cost: number;
    clickMultiplier: number;
    productionMultiplier: number;
  }

  export const upgrades: Upgrade[] = [
    {
      id: "clickup1",
      name: 'Click Upgrade 1',
      description:"",
      img:"",
      cost: 10,
      clickMultiplier: 2,
      productionMultiplier: 1,
    },
    {
      id: 2,
      name: 'Production Upgrade 1',
      description:"",
      img:"",
      cost: 50,
      clickMultiplier: 1,
      productionMultiplier: 2,
    },

  ];
