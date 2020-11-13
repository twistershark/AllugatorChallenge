import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export const Container = styled.button<buttonProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;

  background: #fff;
  border: none;
  border-radius: 24px;

  height: 3.5rem;
  width: 85%;
  text-align: left;
  transition: background-color 400ms;

  color: #babdc2;
  font-size: 1rem;
  font-weight: bold;

  & + button {
    margin-top: 4px;
  }

  &:hover {
    color: #fff;
    background: ${shade(0.2, '#10cf58')};

    svg {
      fill: #fff;
    }
  }

  ${props =>
    props.selected &&
    css`
      background: #8ef5b5;
      color: #10cf58;
    `}
`;

export const ButtonText = styled.span`
  margin-left: 10px;
`;
