// import data from '../json/sites.json';
import styled from 'styled-components';
import {LazyLoadImage} from 'react-lazy-load-image-component'

const StyledCard = styled.div`
  width: 310px;
  height: 247px;
  background-color: white;
  display: flex;
  flex-direction:column;
  border-radius: 5px; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-right:20px;
  margin-bottom:20px;
  text-decoration:none;
  @media all and (max-width:650px){
    margin-right:0px;
  }
  img{
    border-radius: 5px 5px 0px 0px; 
  }
`;
const StyledContainer = styled.div`

  width: 100%;
  height: 80%;
`;
const StyledImg = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StyledH3= styled.h3`
font-family: Roboto;
font-weight: bold;
font-size: 20px;
color:#383B58;
text-decoration:none;

`;
const StyledP= styled.p`
font-family: Roboto;
font-weight: bold;
font-size: 14px;
color:#383B58;
text-decoration:none;
opacity:0.6;
`;
const StyledContainerSecond = styled.div`
    margin-left:11px;
`;

export default function CardCategories({category,amount, img}) {
  return(
    <>
  <StyledCard>
    <StyledContainer>
      <LazyLoadImage className='lazyLoad'   width="100%"
        height="100%"  src={img} alt="imagen" />
    </StyledContainer>
    <StyledContainerSecond>
      <StyledH3>{category}</StyledH3>
      <StyledP>{amount + " "+ category}</StyledP>
    </StyledContainerSecond>
  </StyledCard>
  </>
  );
}