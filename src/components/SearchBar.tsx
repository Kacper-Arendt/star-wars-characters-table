import React, {useState} from "react";
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import Select from 'react-select'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  
  column-gap: 2rem;
`

const Search = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 3.5rem 1rem 1.5rem;
  border: 1px solid #BAC6D8;
  border-radius: 5px;
  outline: none;
`

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: -3.3rem;
  cursor: pointer;
`

export const SearchBar = () => {

    const onChangeHandler = (e: any) => {
        console.log(e)
    }
    return (
        <Wrapper>
            <Search>
                <Input type="text" placeholder='Search'/>
                <Button type='submit'><FaSearch/></Button>
            </Search>
            <Select
                isMulti
                name="colors"
                placeholder='Species'
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChangeHandler}
                />
            <Select
                isMulti
                name="colors"
                placeholder='HomeWorld'
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChangeHandler}
                />
            <Select
                name="colors"
                placeholder='Status'
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChangeHandler}
                />
        </Wrapper>
    )
}