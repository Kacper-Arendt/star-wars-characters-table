import React from "react";
import styled from "styled-components";
import {SearchBar} from "./SearchBar";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 2rem;
  
  width: 100%;
  max-width: 100rem;
  margin-top: 5rem;
  padding: 2rem;
`;


export const Main = () => {
    return (
        <Wrapper>
            <StyledContainer>
                <h1>Characters</h1>
                <SearchBar/>
            </StyledContainer>
        </Wrapper>
    )
}