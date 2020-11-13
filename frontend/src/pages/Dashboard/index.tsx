import React from 'react';

import { Container, TableContainer } from './styles';

import SideMenu from '../../components/SideMenu';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideMenu />
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Cargo</th>
              <th>Salário</th>
              <th>Status</th>
              <th>UF</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="title">Paulo Victor da Silva</td>
              <td>00000000000</td>
              <td>Dev</td>
              <td>R$ 5890,58</td>
              <td>ATIVO</td>
              <td>GO</td>
              <td>17/02/1996</td>
            </tr>

            <tr>
              <td className="title">Paulo Victor da Silva</td>
              <td>00000000000</td>
              <td>Dev</td>
              <td>R$ 5890,58</td>
              <td>ATIVO</td>
              <td>GO</td>
              <td>17/02/1996</td>
            </tr>

            <tr>
              <td className="title">Paulo Victor da Silva</td>
              <td>00000000000</td>
              <td>Dev</td>
              <td>R$ 5890,58</td>
              <td>ATIVO</td>
              <td>GO</td>
              <td>17/02/1996</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
