import styled from 'styled-components';
import SearchInput from './SearchInput';
import Button from '../components/Button';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from './Calendar';
import DropdownList from './DropdownList';

const StyledDivContainer = styled.div`
  background: #545776;
  padding: 0.1em;

`;
const StyledTitle = styled.h2`
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  padding: 0.5em;
`;
const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 20px 20px 20px;
  @media all and (max-width:900px){
    flex-direction:column;
    align-items:center;
  }
`;


export default function SearchBar({handleCity,takeCity,takeDate}) {
  return(
      <StyledDivContainer>        
        <StyledTitle>Busca ofertas en hoteles, casas y mucho más</StyledTitle>
        <SearchBarWrapper>
          <SearchInput input={<DropdownList takeCity={takeCity} icon={<FaMapMarkerAlt/>} />} icon={<FaMapMarkerAlt/>} />
          <SearchInput input={<Calendar takeDate={takeDate} placeHolderText="Chech in - Check out"/>} icon={<FaRegCalendarAlt/>} />
          <div onClick={handleCity}><Button text="Buscar" color="#FFFFFF" backgroundColor="#1DBEB4"/></div>
        </SearchBarWrapper>
      </StyledDivContainer>
  );
}