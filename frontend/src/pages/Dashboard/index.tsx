import React, { useState, useEffect } from 'react';

import {
  Container,
  ContentContainer,
  FilterMenu,
  FilterTitle,
  FilterButtonsContainer,
  FilterButton,
  FilterInputContainer,
  FilterInput,
  Send,
  TableContainer,
} from './styles';

import SideMenu from '../../components/SideMenu';

import api from '../../services/api';

import formatValue from '../../utils/formatValue';

interface Collaborator {
  id: string;
  name: string;
  job: string;
  cpf: string;
  uf: string;
  salary: number;
  formattedSallary: string;
  status: string;
  signUpDate: string;
}

const Dashboard: React.FC = () => {
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/');

      const collaboratorsFormatted = response.data.map(
        (collaborator: Collaborator) => ({
          ...collaborator,
          formattedSallary: formatValue(collaborator.salary),
        }),
      );

      setCollaborators(collaboratorsFormatted);
    }

    loadData();
  }, []);

  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        <FilterMenu>
          <FilterTitle>Filtrar por:</FilterTitle>
          <FilterButtonsContainer>
            <FilterButton>Nome</FilterButton>
            <FilterButton>CPF</FilterButton>
            <FilterButton>Cargo</FilterButton>
            <FilterButton>Salário</FilterButton>
            <FilterButton>Status</FilterButton>
            <FilterButton>UF</FilterButton>
            <FilterButton>Data de Cadastro</FilterButton>
          </FilterButtonsContainer>
          <FilterInputContainer>
            <FilterInput />
            <Send>Filtrar</Send>
          </FilterInputContainer>

          {/* {[<Foo />, <Bar />]} */}
          {/* [param] */}
        </FilterMenu>

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
                <th>Cadastrado</th>
              </tr>
            </thead>

            <tbody>
              {collaborators.map(collaborator => (
                <tr key={collaborator.id}>
                  <td>{collaborator.name}</td>
                  <td>{collaborator.cpf}</td>
                  <td>{collaborator.job}</td>
                  <td>{collaborator.formattedSallary}</td>
                  <td>{collaborator.status}</td>
                  <td>{collaborator.uf}</td>
                  <td>{collaborator.signUpDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </ContentContainer>
    </Container>
  );
};

export default Dashboard;
