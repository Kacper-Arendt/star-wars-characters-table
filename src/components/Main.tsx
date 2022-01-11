import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {TableComponent} from "./TableComponent";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
    "title ."
    "filters actions"
    "table table"
    ". pagination";
  align-items: start;
  row-gap: 2rem;

  width: 100%;
  max-width: 110rem;
  margin-top: 5rem;
  padding: 2rem;
  
  h1{
    grid-area: title;
  }
`;

const CharactersActions = styled.div`
  grid-area: actions;
  justify-self: end;
  display: flex;
  column-gap: 2rem;
  
  button{
    display: flex;
    align-items: center;
    column-gap: 5px;
  
    padding: .75em 1em;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    
    :first-of-type{
      background: #0088DA;
    }
    :last-of-type{
      background: #BC2626;
    }
    
    svg{
      font-size: 1.3em;
    }
  }
`;

export const Main = () => {
    return (
        <Wrapper>
            <StyledContainer>
                <h1>Characters</h1>
                <SearchBar/>
                <CharactersActions>
                    <button><IoMdRemoveCircleOutline />Deactivate Characters</button>
                    <button><IoMdRemoveCircleOutline />Remove Characters</button>
                </CharactersActions>
                <TableComponent />
            </StyledContainer>
        </Wrapper>
    )
}