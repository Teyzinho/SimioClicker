import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import bananaImg from '../../assets/banana.png';
import './Banana.css';
import {
  increment,
} from '../../state/counterSlice';

const Banana = () => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state.counter.value);
  // const upgradeId = useAppSelector((state) => state.counter.upgrades);

  function handleCLick() {
    dispatch(increment());
  }

  return (
    <div className="banana-container" >
      <div onClick={() => handleCLick()}>
        <img src={bananaImg} alt="banana" />
      </div>
      <span><h2>Quantidade {count} </h2></span>
    </div>
  );
};

export default Banana;
