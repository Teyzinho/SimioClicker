interface Update {
    key: string;
    name: string;
    image: string;
    cost: number;
    clickMultiplier: number;
    productionMultiplier: number;
    prerequisites: string[];
}

const mouseUpgradesData: Update[] = [
    {
        key: 'upgrade1',
        name: 'Upgrade 1',
        image: '',
        cost: 2,
        clickMultiplier: 1.5,
        productionMultiplier: 1,
        prerequisites: []
    },
    {
        key: 'upgrade2',
        name: 'Upgrade 2',
        image: '',
        cost: 3,
        clickMultiplier: 2,
        productionMultiplier: 1.2,
        prerequisites: ['upgrade1']
    },
    {
        key: 'upgrade3',
        name: 'Upgrade 3',
        image: '',
        cost: 5,
        clickMultiplier: 3,
        productionMultiplier: 1.5,
        prerequisites: ['upgrade1', 'upgrade2']
    }
];

export default mouseUpgradesData;
