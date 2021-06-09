import * as React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'utils/Components';

const StyledWrapper = styled(Wrapper) <{ location?: string }>`
  position: relative;
  height: 40px;
  width: ${({location}) => location === 'navigation' ? '100%' : '50%'};
  justify-content: center;
`;

const StyledLabel = styled.label`
  display: flex;
  position: absolute;
  top: 35%;
  left: 3%;
  pointer-events: none;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.grey};
  font-size: 1.4rem;
  font-weight: ${({theme}) => theme.font.black};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 25px;
  position: absolute;
  background-color: #ededed;
  border-radius: 20px;
  border: none;
  font-size: 1.2em;
  outline: none;
  color: ${({ theme }) => theme.color.black};

  &:focus + ${StyledLabel} {
    transform: translatey(-10px);
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.yellow};
  }

  &:valid + ${StyledLabel}{
    transform: translatey(-10px);
    font-size: 1.2rem;
  }

`;

interface IInput extends React.HTMLProps<JSX.Element>{
  type?: string,
  label?: string,
  name?: string,
  required?: boolean,
  value?: string,
  fnChange?: any,
  location?: string

}

const Input = ({ type, label, name, value, fnChange, location }: IInput) => (
  <StyledWrapper location={location}>
    <StyledInput type={type} name={name} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => fnChange(e)} required />
    <StyledLabel>{label}</StyledLabel>
  </StyledWrapper>
);


export default Input;

