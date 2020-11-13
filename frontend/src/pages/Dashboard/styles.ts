import styled from 'styled-components';
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
  height: 12rem;
  width: 100%;
  padding-left: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 1px 2px 8px #d1d1d1;
`;

export const FilterTitle = styled.h1`
  margin-top: 8px;
  font-size: 1.5rem;
  color: #10cf58;
`;

export const FilterButtonsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;

export const FilterButton = styled.button<filterProps>`
  border: none;
  background: #fff;
  height: 2.5rem;
  padding: 0.5rem;
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
`;

export const FilterInputContainer = styled.div``;

export const FilterInput = styled.input``;

export const Send = styled.button``;

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
