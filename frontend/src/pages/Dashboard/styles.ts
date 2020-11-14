import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface filterProps {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterMenu = styled.section`
  background: #fff;
  border-radius: 8px;
  height: 11rem;
  width: 100%;
  padding-left: 15rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: column;

  box-shadow: 1px 2px 8px #d1d1d1;
`;

export const FilterTitle = styled.h1`
  margin-top: 8px;
  font-size: 20px;
  color: #10cf58;
`;

export const FilterButtonsContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
`;

export const FilterButton = styled.button<filterProps>`
  border: none;
  background: #fff;
  height: 2.5rem;
  padding: 0.5rem;
  width: 150px;
  color: #969cb3;
  transition: background-color 400ms;

  border: 2px solid #8ef5b5;
  border-radius: 12px;

  & + button {
    margin-left: 4px;
  }

  &:hover {
    background: #8ef5b5;
    color: ${shade(0.4, '#10cf58')};
    border-color: #10cf58;
  }

  ${props =>
    props.selected &&
    css`
      background: #8ef5b5;
      color: ${shade(0.4, '#10cf58')};
      border-color: #10cf58;
    `}
`;

export const FilterInputContainer = styled.div`
  margin-top: 1rem;
  padding: 0 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FilterInput = styled.input`
  background: #f0f0f5;
  margin: 0 20px;
  width: 100%;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 1rem;
  color: #10cf58;

  &::placeholder {
    font-size: 0.9rem;
    color: #969cb3;
  }

  &:focus {
    border: 2px solid #10cf58;
  }
`;

export const SalaryFilterContainer = styled.div`
  display: flex;
`;

export const Send = styled.button`
  width: 10%;
  background: #8ef5b5;
  border: none;
  border-radius: 24px;
  height: 3rem;
  text-align: center;
  transition: background-color 400ms;

  color: #363f5f;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #10cf58;
  }
`;

export const NoFilterSelectedText = styled.h4`
  margin-top: 20px;
  color: #969cb3;
`;

export const TableContainer = styled.section`
  margin-top: 8px;
  margin-left: 15rem;
  table {
    width: 100%;
    position: relative;
    border-spacing: 0 8px;
    th {
      position: sticky;
      top: 0;
      background: #10cf58;
      color: #fff;
      font-weight: bold;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    th:first-child {
      border-radius: 8px 0 0 8px;
    }
    th:last-child {
      border-radius: 0 8px 8px 0;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
    }
    tr:hover {
      td {
        color: #363f5f;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
