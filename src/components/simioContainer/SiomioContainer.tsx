import styled from 'styled-components';

const StyledSimioContainer = styled.div`
  width: 100%;
  height: 175px;
  background-color: #007FBF;
  border-bottom: 5px solid white;
  border-top: 5px solid white;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  gap: 5px;

  overflow-y: auto;
  overflow-x: hidden;

  & img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

const SimioContainer = ({ character }) => {
  const renderSimioImages = () => {
    const simioImages = [];

    for (let i = 0; i < character.amount; i++) {
      simioImages.push(
        <img
          key={i}
          src={character.imagePath}
          alt={character.name}
        />
      );
    }

    return simioImages;
  };

  return <StyledSimioContainer>{renderSimioImages()}</StyledSimioContainer>;
};

export default SimioContainer;
