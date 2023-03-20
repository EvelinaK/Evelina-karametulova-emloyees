import styled from "styled-components";

const Spinner = styled.div`
  border: 16px solid #ffe4c4;
  border-top: 16px #ffe4c4 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
  
  border: 16px solid #ffe4c4; 
  border-top: 16px solid #e5f2e3;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; 

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
const Container = styled.div`
display:flex;
transform: translate(-50%, -50%);
`;

const Loader = ({ openModal }) => {



  return (
    <>
      <Container> <Spinner /></Container >
    </>
  )
};

export default (Loader);


