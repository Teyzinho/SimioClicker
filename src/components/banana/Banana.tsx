import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import bananaImg from '../../assets/banana.png';
import './Banana.css';
import { increment } from '../../state/counterSlice';
import styled, { keyframes } from 'styled-components';
import { useAppSelector } from '../../hooks';

const BananaImg = styled.img`
  cursor: pointer;
`;

const MiniBananaAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

const ClickPowerAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    opacity: 0;
    transform: translateY(-70px);
  }
`

const MiniBanana = styled.img<{ left: number; top: number }>`
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0;
  animation: ${MiniBananaAnimation} 1s linear forwards;
  pointer-events: none;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

const ClickPower = styled.p<{ left: number; top: number }>`
  position: absolute;
  font-size: 2rem;
  animation: ${ClickPowerAnimation} 2s linear forwards;
  pointer-events: none;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`

const Banana = () => {
  const clickPower = useAppSelector((state) => state.counter.clickPower)
  const [isPressed, setIsPressed] = useState(false);
  const [miniBananas, setMiniBananas] = useState<{ id: number; position: { x: number; y: number } }[]>([]);
  const [miniBananaCounter, setMiniBananaCounter] = useState(0);
  const [showClick, setShowClick] = useState<{ id: number; position: { x: number; y: number } }[]>([]);
  const [clickCounter, setClickCounter] = useState(0);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsPressed(false);
    createMiniBanana(event.clientX, event.clientY);
    createClickPower(event.clientX, event.clientY);
  };

  const getTransformScale = () => {
    return isPressed ? 'scale(0.9)' : 'scale(1)';
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  const createMiniBanana = (x: number, y: number) => {
    const newMiniBanana = {
      id: miniBananaCounter,
      position: { x, y },
    };
    setMiniBananaCounter((prevCounter) => prevCounter + 1);
    setMiniBananas((prevMiniBananas) => [...prevMiniBananas, newMiniBanana]);
  };

  const createClickPower = (x: number, y: number) => {
    const newCLickPower = {
      id: clickCounter,
      position: { x, y },
    }
    setClickCounter((prevCounter) => prevCounter + 1);
    setShowClick((prevClick) => [...prevClick, newCLickPower])
  }

  const handleMiniBananaAnimationEnd = (id: number) => {
    setMiniBananas((prevMiniBananas) => prevMiniBananas.filter((miniBanana) => miniBanana.id !== id));
  };

  return (
    <div className="banana-container">
      <div onClick={handleClick}>
        <BananaImg
          src={bananaImg}
          alt="Banana"
          style={{ transform: getTransformScale() }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        {miniBananas.map((miniBanana) => (
          <MiniBanana
            key={miniBanana.id}
            src={bananaImg}
            alt="Mini Banana"
            left={miniBanana.position.x}
            top={miniBanana.position.y}
            onAnimationEnd={() => handleMiniBananaAnimationEnd(miniBanana.id)}
          />
        ))}
        {showClick.map((state) => (
          <ClickPower
            key={state.id}
            left={state.position.x}
            top={state.position.y}
          >
            +{clickPower}
          </ClickPower>
        ))

        }
      </div>
    </div>
  );
};

export default Banana;
