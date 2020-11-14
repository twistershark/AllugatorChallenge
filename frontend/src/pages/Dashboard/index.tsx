import React, { useState, useEffect, useCallback } from 'react';

import {
  Container,
  ContentContainer,
  FilterMenu,
  FilterTitle,
  FilterButtonsContainer,
  FilterButton,
  FilterInputContainer,
  SalaryFilterContainer,
  FilterInput,
  Send,
  NoFilterSelectedText,
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
  const [filter, setFilter] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

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

  const handleSetFilter = useCallback(
    number => {
      if (number === filter) setFilter(-1);
      else setFilter(number);
    },
    [filter],
  );

  const Input = useCallback(() => {
    switch (filter) {
      case 0:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Nome do funcionário"
          />
        );
      case 1:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="CPF do funcionário"
          />
        );
      case 2:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Cargo do funcionário"
          />
        );
      case 3:
        return (
          <SalaryFilterContainer>
            <FilterInput
              value={minSalary}
              onChange={e => setMinSalary(e.target.value)}
              placeholder="Valor mínimo de salário"
            />
            <FilterInput
              value={maxSalary}
              onChange={e => setMaxSalary(e.target.value)}
              placeholder="Valor máximo de salário"
            />
          </SalaryFilterContainer>
        );
      case 4:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Status do funcionário"
          />
        );
      case 5:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="UF do funcionário"
          />
        );
      case 6:
        return (
          <FilterInput
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Data de cadastro do funcionário"
          />
        );
      default:
        return null;
    }
  }, [filter, minSalary, maxSalary, searchValue]);

  return (
    <Container>
      <SideMenu />
      <ContentContainer>
        <FilterMenu>
          <FilterTitle>Filtrar por:</FilterTitle>
          <FilterButtonsContainer>
            <FilterButton
              selected={filter === 0}
              onClick={() => handleSetFilter(0)}
            >
              Nome
            </FilterButton>
            <FilterButton
              selected={filter === 1}
              onClick={() => handleSetFilter(1)}
            >
              CPF
            </FilterButton>
            <FilterButton
              selected={filter === 2}
              onClick={() => handleSetFilter(2)}
            >
              Cargo
            </FilterButton>
            <FilterButton
              selected={filter === 3}
              onClick={() => handleSetFilter(3)}
            >
              Salário
            </FilterButton>
            <FilterButton
              selected={filter === 4}
              onClick={() => handleSetFilter(4)}
            >
              Status
            </FilterButton>
            <FilterButton
              selected={filter === 5}
              onClick={() => handleSetFilter(5)}
            >
              UF
            </FilterButton>
            <FilterButton
              selected={filter === 6}
              onClick={() => handleSetFilter(6)}
            >
              Data de Cadastro
            </FilterButton>
          </FilterButtonsContainer>
          <FilterInputContainer>
            <Input />
            {filter !== -1 ? (
              <Send>Filtrar</Send>
            ) : (
              <NoFilterSelectedText>
                Nenhum filtro selecionado.
              </NoFilterSelectedText>
            )}
          </FilterInputContainer>
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
