import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const TableContainer = styled.section`
  margin-top: 64px;
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
